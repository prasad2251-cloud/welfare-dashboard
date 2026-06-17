document.addEventListener("DOMContentLoaded", loadData);

async function loadData() {

  const api =
  "https://script.google.com/macros/s/AKfycbz-wDK6Z-WhCr6yOvUtSGca6vVtInsdYBsi4_PgF-XOAjqS8_91fxhwh3dIAhzx_upy/exec";

  const response = await fetch(api);
  const data = await response.json();

  let html = "<h2>Employee Welfare Data</h2>";

  html += "<table border='1' cellpadding='10' style='margin:auto; border-collapse:collapse;'>";

  html += "<tr>";
  html += "<th>Police Station</th>";
  html += "<th>Rank</th>";
  html += "<th>Employee Name</th>";
  html += "<th>Date of Birth</th>";
  html += "<th>Mobile No</th>";
  html += "</tr>";

  data.forEach(emp => {

      html += "<tr>";

      html += "<td>" + emp.ps + "</td>";

      html += "<td>" + emp.rank + "</td>";

      html += "<td>" + emp.employee + "</td>";

      html += "<td>" + emp.dob + "</td>";

      html += "<td>" + emp.mobile + "</td>";

      html += "</tr>";

  });

  html += "</table>";

  document.body.innerHTML =
      "<h1>CHITTOOR POLICE WELFARE DASHBOARD</h1>" + html;
}
