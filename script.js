const car = document.querySelector(".car");
const cloud = document.querySelector(".cloud");
const girl = document.querySelector(".girl");
const rocket = document.querySelector(".rocket");

function moveOnScroll(element, size) {
  document.addEventListener("scroll", () => {
    element.style.transform = `translateX(${window.scrollY * size}px)`;
  });
}
moveOnScroll(car, 0.1)
moveOnScroll(cloud, -0.1)
moveOnScroll(girl, 0.1)
moveOnScroll(rocket, -0.1)


function toggleMenu() {
  const nav = document.getElementById("nav");
  const menuIcon = document.querySelector(".menu-icon");
  const headerCall = document.querySelector(".header__call");
  nav.classList.toggle("active");
  menuIcon.classList.toggle("active");
  headerCall.classList.toggle("active");
}
document.addEventListener('click', function(event){
    const nav = document.getElementById("nav");
    const menuIcon = document.querySelector(".menu-icon");
    const headerCall = document.querySelector(".header__call");
    if (!nav.contains(event.target) && !menuIcon.contains(event.target) && !headerCall.contains(event.target)){
        nav.classList.remove('active');
        menuIcon.classList.remove('active');
        headerCall.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
    });
 /*  *//*  *//*  *//*  */
 
 
function toggleMenu() {
    const nav = document.getElementById('nav');
    const menuIcon = document.querySelector('.menu-icon');
    nav.classList.toggle('active');
    menuIcon.classList.toggle('active');
    document.body.classList.toggle('menu-open'); // Добавляем/убираем класс для скрытия прокрутки
  }

  // Закрываем меню при клике вне его
  document.addEventListener('click', function(event) {
    const nav = document.getElementById('nav');
    const menuIcon = document.querySelector('.menu-icon');
    if (!nav.contains(event.target) && !menuIcon.contains(event.target)) {
      nav.classList.remove('active');
      menuIcon.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });

  
  const swiper = new swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });