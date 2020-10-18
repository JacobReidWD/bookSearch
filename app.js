function showButton(id) {
  document.getElementById(id).style.cssText = "background-color:#616161;color:#FF0101;border-radius:10px;";
}
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

/* close animation */
$(document).ready(function(){
$(".closeFive").click(function(){
            $("#biography").animate({
                width: "toggle"
            });
        });
    });
$(document).ready(function(){
$(".closeSix").click(function(){
            $("#scifi").animate({
                width: "toggle"
            });
        });
    });
$(document).ready(function(){
$(".close").click(function(){
            $("#horror").animate({
                width: "toggle"
            });
        });
    });
$(document).ready(function(){
$(".closeTwo").click(function(){
            $("#comedy").animate({
                width: "toggle"
            });
        });
    });
$(document).ready(function(){
$(".closeThree").click(function(){
            $("#mystery").animate({
                width: "toggle"
            });
        });
    });
$(document).ready(function(){
$(".it").click(function(){
            $("id").slideUp({
                width: "toggle"
            });
        });
    });
 $(document).ready(function(){
$(".tester").click(function(){
            $("#educational").animate({
                width: "toggle"
            });
        });
    }); 
    

