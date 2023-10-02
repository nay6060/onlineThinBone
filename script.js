//Getting the tags what we wants

const bars = document.querySelector(".fa-bars");
const flex = document.querySelector(".menuFlex");

bars.addEventListener("click",()=>{
  bars.classList.toggle("fa-xmark");
  flex.classList.toggle("active");

});


var swiper = new Swiper(".courses-slider", {
  spaceBetween: 20,
  grabCursor:true,
  loop:true,

  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  breakpoints: {
      540: {
        slidesPerView:1,
      },
      768: {
        slidesPerView:2,
      },
      1024: {
        slidesPerView:3,
      }
  }
});

var swiper = new Swiper(".teacher-slider", {
  spaceBetween: 20,
  grabCursor:true,
  loop:true,

  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  breakpoints: {
      540: {
        slidesPerView:1,
      },
      768: {
        slidesPerView:2,
      },
      1024: {
        slidesPerView:3,
      }
  }
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  grabCursor:true,
  loop:true,

  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  breakpoints: {
      540: {
        slidesPerView:1,
      },
      768: {
        slidesPerView:2,
      },
      1024: {
        slidesPerView:3,
      }
  }
});