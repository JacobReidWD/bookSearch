function show(id) {
  document.getElementById(id).style.display = "block";
}
function noShow(id) {
  document.getElementById(id).style.display = "none";
}
function dropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}
document.getElementById("myDropdown").style.color = "red";
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
$(document).ready(function(){
$(".dropbtn").click(function(){
            $("#popUp").animate({
                width: "toggle"
            });
        });
    });
