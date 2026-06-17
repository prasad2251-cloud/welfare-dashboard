document.addEventListener("DOMContentLoaded", loadData);

async function loadData() {

  // PASTE FULL GOOGLE APPS SCRIPT URL
  const api = https://script.google.com/u/0/home/projects/12PCIatPE9GSAOuDCvbOx5IHGfMnfVYTzAHFNC1iRB30g--o6eoRJU1DJ/edit

  try {
    const response = await fetch(api);
    const data = await response.json();

    console.log("Data Loaded:", data);

    // Today's date
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;

    let birthdayCount = 0;
    let marriageCount = 0;

    // Count birthdays + marriage days
    data.forEach(emp => {

      // Birthday check
      let dob = new Date(emp.dob);
      if (dob.getDate() === day && (dob.getMonth() + 1) === month) {
        birthdayCount++;
      }

      // Marriage check
      let marriage = new Date(emp.marriage);
      if (marriage.getDate() === day && (marriage.getMonth() + 1) === month) {
        marriageCount++;
      }

    });

    // Dashboard cards
    document.getElementById("total").innerText = data.length;
    document.getElementById("birthday").innerText = birthdayCount;
    document.getElementById("marriage").innerText = marriageCount;

    // Build employee table
    let html = `
      <table border="1" width="100%" cellspacing="0" cellpadding="8">
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
          <td>${emp.ps || ""}</td>
          <td>${emp.rank || ""}</td>
          <td>${emp.employee || ""}</td>
          <td>${formatDate(emp.dob)}</td>
          <td>${emp.mobile || ""}</td>
        </tr>
      `;
    });

    html += "</table>";

    document.getElementById("dataTable").innerHTML = html;

    // Search function
    document.getElementById("search").addEventListener("keyup", function () {
      let value = this.value.toLowerCase();
      let rows = document.querySelectorAll("table tr");

      rows.forEach((row, index) => {
        if (index === 0) return;

        let text = row.innerText.toLowerCase();

        if (text.includes(value)) {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }
      });
    });

  } catch (error) {
    console.error("Error loading data:", error);
    alert("Dashboard data not loading. Check Apps Script URL.");
  }
}

// Format date function
function formatDate(dateString) {
  if (!dateString) return "";

  let d = new Date(dateString);
  let day = String(d.getDate()).padStart(2, "0");
  let month = String(d.getMonth() + 1).padStart(2, "0");
  let year = d.getFullYear();

  return `${day}-${month}-${year}`;
}
