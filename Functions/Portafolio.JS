let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('a');
    navBar.classList.toggle('active');
  }