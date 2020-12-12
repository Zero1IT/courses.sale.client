window.externalJS = {
  wrapperNavbar
}

function wrapperNavbar() {
  const navbar = document.getElementsByClassName('scrolling-navbar')[0];

  if (navbar) {
    if (window.innerWidth <= 992) {
      darkNavbar();
    }

    window.addEventListener('scroll', () => {
      if (window.innerWidth > 992) {
        if (window.pageYOffset > 100) {
          navbar.style.height = "64px";
          darkNavbar();
        } else {
          navbar.style.height = "80px";
          lightNavbar();
        }
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth <= 992) {
        navbar.style.height = "";
        darkNavbar();
      } else {
        lightNavbar();
      }
    });
  }

  function lightNavbar() {
    navbar.classList.replace('bg-dark', 'bg-light');
    navbar.classList.replace('navbar-dark', 'navbar-light');
  }

  function darkNavbar() {
    navbar.classList.replace('bg-light', 'bg-dark');
    navbar.classList.replace('navbar-light', 'navbar-dark');
  }
}