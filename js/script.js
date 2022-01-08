let menu = document.querySelector('#menu-bar');
let anouncement = document.querySelector('.header_navbar-anouncement');
let button = document.querySelector('.header_navbar-buttons');
let account = document.querySelector('.header_navbar-account');

let flag = 1;

menu.onclick = () =>{
    console.log('clicked');
    menu.classList.toggle('fa-times');

    if(flag == 1){
        anouncement.style.display = "initial";
        button.style.display = "initial";
        account.style.display = "initial";
        flag = 0;
    }else if(flag == 0){
        anouncement.style.display = "none";
        button.style.display = "none";
        account.style.display = "none";
        flag = 1;
    }
}

const current = document.querySelector('#current');
const imgs = document.querySelector('.imgs');
const img = document.querySelectorAll('.imgs img');
const opacity = 0.6;
let imagePath = "";

// Set first img opacity
img[0].style.opacity = opacity;

imgs.addEventListener('click', imgClick);

function imgClick(e) {
    // Reset the opacity
    img.forEach(img => (img.style.opacity = 1));

    // Change current image to src of clicked image
    current.src = e.target.src;
    imagePath = e.target.attributes.src.nodeValue;

    // Add fade in class
    current.classList.add('fade-in');

    // Remove fade-in class after .5 seconds
    setTimeout(() => current.classList.remove('fade-in'), 500);

    // Change the opacity to opacity var
    e.target.style.opacity = opacity;
}

let currentImage = document.querySelectorAll('.curImg');
// console.log(currentImage[0].href)

currentImage.onclick = () =>{
    console.log(currentImage[0]);
}

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }