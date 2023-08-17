document.getElementById("new_game").addEventListener("click", start);
document.getElementById("records").addEventListener("click", showRecords);

function showRecords()
{
  alert(localStorage["recs"]);
}
