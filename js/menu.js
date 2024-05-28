    $(document).ready(function () {

    window.addEventListener("resize", function() {
         if (window.innerWidth > 995) {
                  mainMenu.setAttribute("aria-expanded", "false");
            }
    })
                const mainMenu = document.getElementById("mainMenu");
                const support = document.getElementById("menu_support");
                const more = document.getElementById("menu_more");
                const section = document.getElementById("section");

                section.classList.remove("ecl-menu__item--current", 'ecl-menu__item--has-children', 'ecl-menu__item--expanded');



      $("#menu").click(function(){
      mainMenu.setAttribute("aria-expanded", "true");
      })


  $("#close").click(function(){
    section.classList.remove("ecl-menu__inner--expanded");
    support.setAttribute("aria-expanded", "false");
    more.setAttribute("aria-expanded", "false");
    mainMenu.classList.remove('ecl-menu__item--has-children', 'ecl-menu__item--expanded','ecl-menu__item--current');
    support.classList.remove('ecl-menu__item--has-children', 'ecl-menu__item--expanded','ecl-menu__item--current');
    more.classList.remove('ecl-menu__item--has-children', 'ecl-menu__item--expanded','ecl-menu__item--current');
    mainMenu.setAttribute("aria-expanded", "false");
    })

     $("#menu_support").click(function() {
    if (window.innerWidth < 996){
     support.classList.add('ecl-menu__item--current', 'ecl-menu__item--has-children', 'ecl-menu__item--expanded');
     support.setAttribute("aria-expanded", "true");
     section.classList.add("ecl-menu__inner--expanded");
    }
    })

         $("#menu_more").click(function() {
     if (window.innerWidth < 996){
     more.classList.add('ecl-menu__item--current', 'ecl-menu__item--has-children', 'ecl-menu__item--expanded');
     more.setAttribute("aria-expanded", "true");
     section.classList.add("ecl-menu__inner--expanded");
    }
    })

  $("#back").click(function(){
    section.classList.remove("ecl-menu__inner--expanded");
    mainMenu.classList.remove('ecl-menu__item--has-children', 'ecl-menu__item--expanded','ecl-menu__item--current');
    more.classList.remove('ecl-menu__item--has-children', 'ecl-menu__item--expanded','ecl-menu__item--current');
    support.classList.remove('ecl-menu__item--has-children', 'ecl-menu__item--expanded','ecl-menu__item--current');
    support.setAttribute("aria-expanded", "false");
    more.setAttribute("aria-expanded", "false");
    })

    })
