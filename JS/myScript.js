window.addEventListener("load", init, false);
function init() {
  let gombom = $("gomb");
  gombom.addEventListener("click", vasarlas, false);
  $("result").style.visibility = "invisible";
}
function $(id) {
  return document.getElementById(id);
}
function vasarlas() {
  let kg = $("input").value;

  let fajtak = ["idared", "jonatan", "jonagold", "florena", "crimsonCrisp"];
  if (kg <= 100) {
    if ($("select").value == fajtak[0]) {
      $("result").innerHTML = 250 * kg + " Ft lesz";
      $("result").style.visibility = "visible";
    }
    if ($("select").value == fajtak[1]) {
      $("result").innerHTML = 300 * kg + " Ft lesz";
      $("result").style.visibility = "visible";
    }
    if ($("select").value == fajtak[2]) {
      $("result").innerHTML = 335 * kg + " Ft lesz";
      $("result").style.visibility = "visible";
    }
    if ($("select").value == fajtak[3]) {
      $("result").innerHTML = 230 * kg + " Ft lesz";
      $("result").style.visibility = "visible";
    }
    if ($("select").value == fajtak[4]) {
      $("result").innerHTML = 445 * kg + " Ft lesz";
      $("result").style.visibility = "visible";
    }
  } else {
    $("result").innerHTML = "Nem vehetsz 100 kg nál több almát";
    $("result").style.visibility = "visible";
  }
}
