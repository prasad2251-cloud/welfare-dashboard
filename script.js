document.addEventListener("DOMContentLoaded", loadData);

async function loadData() {
  const api = "https://script.google.com/macros/s/AKfycbzu9mnQb_VIvkNZCRN6uFcTW9_7NYuG9kdzO-QuROl9awOFUGq5gUXvS5TxL9IsRa19yA/exec";

  try {
    const response = await fetch(api);
    const data = await response.json();

    console.log(data);

    document.getElementById("total").innerText = data.length;

  } catch (error) {
    console.log(error);
    alert(error);
  }
}
