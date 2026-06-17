document.addEventListener("DOMContentLoaded", loadData);

async function loadData() {

  const api = "YOUR_APPS_SCRIPT_URL";

  const response = await fetch(api);
  const data = await response.json();

  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;

  let birthdayCount = 0;
  let marriageCount = 0;

  data.forEach(emp => {

    // Birthday count
    let dob = new Date(emp.dob);

    if (dob.getDate() == day && (dob.getMonth()+1) == month) {
      birthdayCount++;
    }

    // Marriage count
    let marriage = new Date(emp.marriage);

    if (marriage.getDate() == day && (marriage.getMonth()+1) == month) {
      marriageCount++;
    }

  });

  document.getElementById("total").innerText = data.length;
  document.getElementById("birthday").innerText = birthdayCount;
  document.getElementById("marriage").innerText = marriageCount;

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
