function NavManager() {
  var arrayinfo = document.getElementsByClassName("info");

  if (document.getElementById("closebtn").innerHTML == ""){
    document.getElementById("mySidenav").style.width = "15em";
    document.getElementById("main").style.marginLeft = "16em";
    document.body.style.opacity = 0.7;
    document.getElementById("closebtn").className = "	fas fa-angle-left"; 
    document.getElementById("closebtn").innerHTML = " ";
    for (let index = 0; index < arrayinfo.length; index++) {
      arrayinfo[index].style.display = 'block';
    }
  } else {
    document.getElementById("mySidenav").style.width = "45px";
    document.getElementById("main").style.marginLeft= "63px";
    document.body.style.opacity = 1;
    document.getElementById("closebtn").className = "	fas fa-angle-right";
    document.getElementById("closebtn").innerHTML = "";
    for (let index = 0; index < arrayinfo.length; index++) {
      arrayinfo[index].style.display = 'none';
    }
  }
}

