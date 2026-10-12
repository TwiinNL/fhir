// Lists every IG in package-feed.xml (same folder) with its newest published version.
// Status and title come from <ig>/package-list.json; the feed has neither.
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
  // Newest entry per package id, by pubDate. Items that do not parse are skipped.
  function newestPerPackage(items, prefix) {
    var newest = {};
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
      if (isNaN(time)) time = -Infinity;
      if (!newest[id] || time > newest[id].time) {
        newest[id] = { id: id, version: version, dir: dir, time: time };
      }
    });
    return Object.keys(newest).sort().map(function (id) { return newest[id]; });
  }
  function packageList(dir) {
    return fetch(dir + "package-list.json")
      .then(function (r) { return r.ok ? r.json() : null; })
      .catch(function () { return null; });
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
      var igs = newestPerPackage(doc.getElementsByTagName("item"), prefix);
      if (igs.length === 0) {
        target.textContent = "No implementation guides have been published yet.";
        return;
      }
      return Promise.all(igs.map(function (ig) { return packageList(ig.dir); })).then(function (lists) {
        var table = document.createElement("table");
        var head = table.insertRow();
        ["Implementation guide", "Latest version", "Date", "All versions"].forEach(function (h) {
          head.appendChild(el("th", h));
        });
        igs.forEach(function (ig, i) {
          var pl = lists[i] || {};
          var entry = (pl.list || []).filter(function (v) { return v.version === ig.version; })[0] || {};
          var row = table.insertRow();
          var first = row.insertCell();
          first.appendChild(el("b", pl.title || ig.id));
          first.appendChild(document.createElement("br"));
          first.appendChild(el("code", ig.id));
          row.appendChild(el("td", ig.version + (entry.status ? " (" + entry.status + ")" : ""), ig.dir + ig.version + "/"));
          var date = entry.date || (isFinite(ig.time) ? new Date(ig.time).toISOString().slice(0, 10) : "");
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
