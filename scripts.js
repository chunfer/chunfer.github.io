const s_smart = window.matchMedia('screen and (max-width: 320px)')
const l_smart = window.matchMedia('screen and (max-width: 480px)')
const ipad = window.matchMedia('screen and (max-width: 767px)')

const work_link = document.querySelector('.work-link');
const exp_link = document.querySelector('.exp-link');
const port_link = document.querySelector('.port-link');

const burgerButton = document.querySelector('#hamburger');

if (s_smart.matches) {
  burgerButton.addEventListener('click', hideShow3)

} else {
  burgerButton.removeEventListener('click', hideShow3)

  if (l_smart.matches){
    burgerButton.addEventListener('click', hideShow2)
  }else{
    burgerButton.removeEventListener('click', hideShow2)
  
    if (ipad.matches) {
      burgerButton.addEventListener('click', hideShow)  
    } else {
      burgerButton.removeEventListener('click', hideShow)
    }
  }
}


function hideShow() {
  work_link.classList.toggle("is-active");
}

function hideShow2() {
  work_link.classList.toggle("is-active");
  exp_link.classList.toggle("is-active");
}

function hideShow3() {
  work_link.classList.toggle("is-active");
  exp_link.classList.toggle("is-active");
  port_link.classList.toggle("is-active");
}

function NavManager() {
  var arrayinfo = document.getElementsByClassName("info");

  if (document.getElementById("closebtn").innerHTML == ""){
    document.getElementById("mySidenav").style.width = "20vw";
    document.getElementById("main").style.marginLeft = "22vw";
    document.getElementById("page-footer").style.marginLeft = "20vw";
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
    document.getElementById("page-footer").style.marginLeft = "5vw";
    
    document.body.style.opacity = 1;
    document.getElementById("closebtn").className = "	fas fa-angle-right";
    document.getElementById("closebtn").innerHTML = "";
    for (let index = 0; index < arrayinfo.length; index++) {
      arrayinfo[index].style.display = 'none';
    }
    document.getElementById("main-headerContent-h1").style.fontSize = "2.8vw";
  }
}

