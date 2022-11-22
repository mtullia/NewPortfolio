// JavaScript Document
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside dropdown meny
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


function showOne() {
		if (document.getElementById("card-one-preview").style.display === "none") {
			document.getElementById("card-one-preview").style.display = "block";
		} else {
			document.getElementById("card-one-preview").style.display = "none";
		}
		
	
}

function showTwo() {
		if (document.getElementById("card-two-preview").style.display === "none") {
			document.getElementById("card-two-preview").style.display = "block";
		} else {
			document.getElementById("card-two-preview").style.display = "none";
		}
		
	
}


function showThree() {
		if (document.getElementById("card-three-preview").style.display === "none") {
			document.getElementById("card-three-preview").style.display = "block";
		} else {
			document.getElementById("card-three-preview").style.display = "none";
		}
		
	
}

function showFour() {
		if (document.getElementById("card-four-preview").style.display === "none") {
			document.getElementById("card-four-preview").style.display = "block";
		} else {
			document.getElementById("card-four-preview").style.display = "none";
		}
		
	
}
