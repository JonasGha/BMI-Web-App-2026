const tableBody = document.querySelector("#bmi-table-body");
const message = document.querySelector("#message");

function addCell(row, value) {
  const cell = document.createElement("td");
  cell.textContent = value;
  row.appendChild(cell);
}

fetch("/api/bmi")
  .then((response) => {
    if (!response.ok) throw new Error("Daten konnten nicht geladen werden.");
    return response.json();
  })
  .then((entries) => {
    message.textContent = entries.length ? "" : "Noch keine Einträge vorhanden.";

    entries.forEach((entry) => {
      const row = document.createElement("tr");
      addCell(row, entry.id);
      addCell(row, entry.name || "–");
      addCell(row, `${entry.heightCm} cm`);
      addCell(row, `${entry.weightKg} kg`);
      addCell(row, Number(entry.bmi).toFixed(2));
      addCell(row, entry.category);
      addCell(row, new Date(entry.createdAt).toLocaleString("de-DE"));
      tableBody.appendChild(row);
    });
  })
  .catch((error) => {
    message.textContent = error.message;
  });
