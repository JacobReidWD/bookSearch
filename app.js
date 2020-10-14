

var styles = {
   "display": "none", 
   "position": "absolute",
   "background-color": #f1f1f1, 
   "min-width": "160px", 
   "box-shadow": "0px 8px 16px 0px rgba(0, 0, 0, 0.2)", 
   "z-index: 1";
};

var obj = document.getElementByClassName("dropdown-conent");
Object.assign(obj.style, styles);



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

