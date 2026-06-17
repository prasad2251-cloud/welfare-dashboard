document.addEventListener("DOMContentLoaded", loadData);

async function loadData() {

    const api =
    "https://script.google.com/macros/s/AKfycbz-wDK6Z-WhCr6yOvUtSGca6vVtInsdYBsi4_PgF-XOAjqS8_91fxhwh3dIAhzx_upy/exec";

    const response = await fetch(api);
    const data = await response.json();

    // Total employees count
    document.getElementById("total").innerText = data.length;

    let html = "<table>";

    html += `
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

    document.body.innerHTML += html;
}
