function openNav() {
  document.getElementById("mySidenav").style.width = "15em";
  document.getElementById("main").style.marginLeft = "16em";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "1em";
  document.body.style.backgroundColor = "white";
}
