document.addEventListener("DOMContentLoaded", loadData);

async function loadData() {

  const api = "PASTE_YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";

  const response = await fetch(api);
  const data = await response.json();

  document.getElementById("total").innerText = data.length;

  document.getElementById("birthday").innerText = 0;
  document.getElementById("marriage").innerText = 0;

  let html = `
  <table>
  <tr>
    <th>Police Station</th>
    <th>Rank</th>
    <th>Employee Name</th>
    <th>Date of Birth</th>
    <th>Mobile No</th>
  </tr>
  `;

  data.forEach(emp => {
    html += `
    <tr>
      <td>${emp.ps}</td>
      <td>${emp.rank}</td>
      <td>${emp.employee}</td>
      <td>${emp.dob}</td>
      <td>${emp.mobile}</td>
    </tr>
    `;
  });

  html += "</table>";

  document.getElementById("tableData").innerHTML = html;
}
