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
$(".horror").click(function(){
            $("#horror").animate({
                width: "toggle"
            });
        });
    });
$(document).ready(function(){
$(".mystery").click(function(){
            $("#mystery").animate({
                width: "toggle"
            });
        });
    });
$(document).ready(function(){
$(".comedy").click(function(){
            $("#comedy").animate({
                width: "toggle"
            });
        });
    });
$(document).ready(function(){
$(".educational").click(function(){
            $("#educational").animate({
                width: "toggle"
            });
        });
    });
$(document).ready(function(){
$(".scifi").click(function(){
            $("#scifi").animate({
                width: "toggle"
            });
        });
    });
$(document).ready(function(){
$(".biography").click(function(){
            $("#biography").animate({
                width: "toggle"
            });
        });
    });

/* hover animation */
$(document).ready(function(){
$(".biography").mouseover(function(){
            $("#biography").animate({
                width: "toggle"
            });
        });
    });
$(document).ready(function(){
$(".scifi").mouseover(function(){
            $("#scifi").animate({
                width: "toggle"
            });
        });
    });
$(document).ready(function(){
$(".horror").mouseover(function(){
            $("#horror").animate({
                width: "toggle"
            });
        });
    });
$(document).ready(function(){
$(".comedy").mouseover(function(){
            $("#comedy").animate({
                width: "toggle"
            });
        });
    });
$(document).ready(function(){
$(".mystery").mouseover(function(){
            $("#mystery").animate({
                width: "toggle"
            });
        });
    });
$(document).ready(function(){
$(".educational").mouseover(function(){
            $("#educational").animate({
                width: "toggle"
            });
        });
    });

