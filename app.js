var className = document.getElementByClassName("dropdown-content");

document.className.style.display = "none";
document.className.style.position = "absolute";
document.className.style.backgroundColor = "#f1f1f1";
document.className.style.minWidth = "160px";
document.className.style.boxShadow = "0px 8px 16px 0px rgba(0, 0, 0, 0.2)";
document.className.style.zIndex = "1";

function dropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

