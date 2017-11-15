var navbar = document.querySelector('.navbar-default');
var sideNavToggle = document.querySelector('.side-nav__toggle');
var sideNav = document.querySelector('.side-nav');

window.onscroll = function() {
  if (window.scrollY > 100 && navbar.classList.contains('normal')) {
    navbar.classList.remove('normal');
    navbar.classList.add('invert');
  } else if (window.scrollY < 50) {
    navbar.classList.remove('invert');
    navbar.classList.add('normal');
  }
};

sideNavToggle.addEventListener('click', function() {
    if(sideNav.classList.contains('side-nav--open')) {
        sideNav.classList.remove('side-nav--open');
        sideNav.classList.add('side-nav--closed');
    } else {
        sideNav.classList.remove('side-nav--closed');
        sideNav.classList.add('side-nav--open');
    }
});
