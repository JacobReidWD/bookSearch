function dropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
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

document.getElementByClassName("dropdown-content").style.display = "none";
document.getElementByClassName("dropdown-content").style.position = "absolute";
document.getElementByClassName("dropdown-content").style.backgroundColor = "#f1f1f1";
document.getElementByClassName("dropdown-content").style.minWidth = "160px";
document.getElementByClassName("dropdown-content").style.boxShadow = "0px 8px 16px 0px rgba(0, 0, 0, 0.2)";
document.getElementByClassName("dropdown-content").style.zIndex = "1";

