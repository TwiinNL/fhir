// Renders the versions in package-list.json (same folder) as a table.
(function () {
  var target = document.getElementById("history-table");
  function cell(row, text, href) {
    var td = document.createElement("td");
    if (href) {
      var a = document.createElement("a");
      a.href = href;
      a.textContent = text;
      td.appendChild(a);
    } else {
      td.textContent = text || "";
    }
    row.appendChild(td);
  }
  fetch("package-list.json")
    .then(function (r) {
      if (!r.ok) throw new Error("HTTP " + r.status);
      return r.json();
    })
    .then(function (pl) {
      var versions = (pl.list || []).filter(function (v) { return v.version !== "current"; });
      if (versions.length === 0) {
        target.textContent = "No versions have been published yet.";
        return;
      }
      var table = document.createElement("table");
      var head = table.insertRow();
      ["Version", "Date", "Status", "Sequence", "Description"].forEach(function (h) {
        var th = document.createElement("th");
        th.textContent = h;
        head.appendChild(th);
      });
      versions.forEach(function (v) {
        var row = table.insertRow();
        cell(row, v.version + (v.current ? " (current)" : ""), v.path);
        cell(row, v.date);
        cell(row, v.status);
        cell(row, v.sequence);
        cell(row, v.desc);
      });
      target.replaceChildren(table);
    })
    .catch(function (e) {
      target.textContent = "Could not load package-list.json (" + e.message + ").";
    });
})();
