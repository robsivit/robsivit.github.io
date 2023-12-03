class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

  /* FIM DO JS DO MENU */

  /* COMEÇO DA ONDA */

  
  var onda1 = document.getElementById('onda1')
  var onda2 = document.getElementById('onda2')
  var onda3 = document.getElementById('onda3')
  var onda4 = document.getElementById('onda4')

  
  window.addEventListener('scroll', function(){

      var rolagemPos = window.scrollY
  
      onda1.style.backgroundPositionX = 400 + rolagemPos * 4 + 'px';

      onda2.style.backgroundPositionX = 300 + rolagemPos * -4 + 'px';
      
      onda3.style.backgroundPositionX = 200 + rolagemPos * 2 + 'px';

      onda4.style.backgroundPositionX = 100 + rolagemPos * -2 + 'px';
  })