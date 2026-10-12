// Lists every IG in package-feed.xml (same folder) with one version of each: the one marked
// current in <ig>/package-list.json, else the highest semver. Title and status come from
// package-list.json; the feed only says which IGs exist and is the fallback for the version.
(function () {
  var target = document.getElementById("ig-table");
  var FEED = "package-feed.xml";

  function field(item, tag) {
    var n = item.getElementsByTagName(tag)[0];
    return n ? n.textContent.trim() : "";
  }
  function el(tag, text, href) {
    var n = document.createElement(tag);
    if (href) {
      var a = document.createElement("a");
      a.href = href;
      a.textContent = text;
      n.appendChild(a);
    } else {
      n.textContent = text || "";
    }
    return n;
  }
  // Semver 2.0.0 section 11 precedence; build metadata is ignored. Returns null if not semver.
  var SEMVER = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?$/;
  function parse(v) {
    var m = SEMVER.exec(v);
    return m && { n: [+m[1], +m[2], +m[3]], pre: m[4] ? m[4].split(".") : [] };
  }
  function compare(a, b) {
    var x = parse(a), y = parse(b);
    if (!x || !y) return (x ? 1 : 0) - (y ? 1 : 0); // not semver: below any semver version
    for (var i = 0; i < 3; i++) if (x.n[i] !== y.n[i]) return x.n[i] < y.n[i] ? -1 : 1;
    if (!x.pre.length || !y.pre.length) return (y.pre.length ? 1 : 0) - (x.pre.length ? 1 : 0);
    for (var j = 0; j < Math.min(x.pre.length, y.pre.length); j++) {
      var p = x.pre[j], q = y.pre[j];
      if (p === q) continue;
      var pn = /^\d+$/.test(p), qn = /^\d+$/.test(q);
      if (pn && qn) return +p < +q ? -1 : 1;
      if (pn !== qn) return pn ? -1 : 1;
      return p < q ? -1 : 1;
    }
    return x.pre.length === y.pre.length ? 0 : x.pre.length < y.pre.length ? -1 : 1;
  }
  function highest(versions) {
    return versions.reduce(function (best, v) {
      return !best || compare(v.version, best.version) > 0 ? v : best;
    }, null);
  }
  // One entry per package id with every version the feed lists. Items that do not parse are skipped.
  function packagesInFeed(items, prefix) {
    var byId = {};
    Array.prototype.forEach.call(items, function (item) {
      var title = field(item, "title");
      var cut = title.lastIndexOf("#");
      var link = field(item, "link");
      if (cut < 1 || !/^https?:\/\//.test(link)) return;
      var id = title.slice(0, cut);
      var version = title.slice(cut + 1);
      var suffix = "/" + version + "/package.tgz";
      if (link.slice(-suffix.length) !== suffix) return;
      var dir = link.slice(0, -suffix.length) + "/";
      if (dir.indexOf(prefix) === 0) dir = dir.slice(prefix.length);
      var time = Date.parse(field(item, "pubDate"));
      var pkg = byId[id] || (byId[id] = { id: id, dir: dir, versions: [] });
      pkg.versions.push({ version: version, date: isNaN(time) ? "" : new Date(time).toISOString().slice(0, 10) });
    });
    return Object.keys(byId).sort().map(function (id) { return byId[id]; });
  }
  function packageList(dir) {
    return fetch(dir + "package-list.json")
      .then(function (r) { return r.ok ? r.json() : null; })
      .catch(function () { return null; });
  }
  // The version to show: the entry marked current, else the highest semver. The "current" entry
  // (the CI build) is not a published version. Falls back to the feed without package-list.json.
  function choose(pkg, pl) {
    var published = pl && Array.isArray(pl.list)
      ? pl.list.filter(function (v) { return v.version && v.version !== "current"; })
      : [];
    if (published.length) {
      var marked = published.filter(function (v) { return v.current === true || v.current === "true"; });
      var v = highest(marked.length ? marked : published);
      return { version: v.version, status: v.status, date: v.date, current: marked.length > 0 };
    }
    var f = highest(pkg.versions);
    return { version: f.version, date: f.date, current: false };
  }

  fetch(FEED)
    .then(function (r) {
      if (!r.ok) throw new Error("HTTP " + r.status);
      return r.text();
    })
    .then(function (xml) {
      var doc = new DOMParser().parseFromString(xml, "application/xml");
      if (doc.getElementsByTagName("parsererror").length) throw new Error("not valid XML");
      var feedLink = field(doc, "link");
      var prefix = feedLink.slice(0, feedLink.lastIndexOf("/") + 1);
      var igs = packagesInFeed(doc.getElementsByTagName("item"), prefix);
      if (igs.length === 0) {
        target.textContent = "No implementation guides have been published yet.";
        return;
      }
      return Promise.all(igs.map(function (ig) { return packageList(ig.dir); })).then(function (lists) {
        var table = document.createElement("table");
        var head = table.insertRow();
        ["Implementation guide", "Version", "Date", "All versions"].forEach(function (h) {
          head.appendChild(el("th", h));
        });
        igs.forEach(function (ig, i) {
          var pl = lists[i] || {};
          var shown = choose(ig, pl);
          var row = table.insertRow();
          var first = row.insertCell();
          first.appendChild(el("b", pl.title || ig.id));
          first.appendChild(document.createElement("br"));
          first.appendChild(el("code", ig.id));
          var cell = el("td", shown.version + (shown.status ? " (" + shown.status + ")" : ""), ig.dir + shown.version + "/");
          if (shown.current) cell.appendChild(document.createTextNode(" \u2013 current version"));
          row.appendChild(cell);
          var date = shown.date || "";
          row.appendChild(el("td", date));
          row.appendChild(el("td", "Version list", ig.dir));
        });
        target.replaceChildren(table);
      });
    })
    .catch(function (e) {
      target.textContent = "Could not load " + FEED + " (" + e.message + ").";
    });
})();
