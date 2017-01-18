function stripeTables() {
  if (!document.getElementsByTagName) return false;
  let tables = document.getElementsByTagName("table");
  let odd,rows;
  for (var i = 0; i < tables.length; i++) {
    odd = false;
    rows = tables[i].getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
      if (odd == false) {
        ros[j].style.background="#ffc";
        odd =false;
      }else {
        odd = true;
      }
    }
  }
}
