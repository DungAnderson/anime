let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}
let xoa = document.querySelector('.md');
xoa.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
let xoa1 = document.querySelector('.md1');
xoa1.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
let xoa2 = document.querySelector('.md2');
xoa2.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
let xoa3 = document.querySelector('.md3');
xoa3.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
let xoa4 = document.querySelector('.md4');
xoa4.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

  var swiper = new Swiper(".anime-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });


  var swiper = new Swiper(".action-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });

  
  var swiper = new Swiper(".child-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });

  var swiper = new Swiper(".family-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });