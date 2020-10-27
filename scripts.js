function NavManager() {
  var arrayinfo = document.getElementsByClassName("info");

  if (document.getElementById("closebtn").innerHTML == ""){
    document.getElementById("mySidenav").style.width = "20vw";
    document.getElementById("main").style.marginLeft = "22vw";
    document.body.style.opacity = 0.7;
    document.getElementById("closebtn").className = "	fas fa-angle-left"; 
    document.getElementById("closebtn").innerHTML = " ";
    for (let index = 0; index < arrayinfo.length; index++) {
      arrayinfo[index].style.display = 'block';
    }
    document.getElementById("main-headerContent-h1").style.fontSize = "2.3vw";

  } else {
    document.getElementById("mySidenav").style.width = "5vw";
    document.getElementById("main").style.marginLeft= "7vw";
    
    document.body.style.opacity = 1;
    document.getElementById("closebtn").className = "	fas fa-angle-right";
    document.getElementById("closebtn").innerHTML = "";
    for (let index = 0; index < arrayinfo.length; index++) {
      arrayinfo[index].style.display = 'none';
    }
    document.getElementById("main-headerContent-h1").style.fontSize = "2.8vw";

  }
}

