function dropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}
function resetStyle(elemClass) {
  elem = document.getElementByClassName(elemClass);
  elem.style.background = 'white';
  
  
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

