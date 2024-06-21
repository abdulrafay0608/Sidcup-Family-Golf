const cursor = document.querySelector(".cursor");
const cursorBlur = document.querySelector(".cursor-blur");
document.addEventListener("mousemove", (dets) => {
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
  cursorBlur.style.left = dets.x - 200 + "px";
  cursorBlur.style.top = dets.y - 200 + "px";
});

const li = document.querySelectorAll(".navbar li");

li.forEach((e) => {
  console.log(e);
  e.addEventListener("mouseenter", () => {
    cursor.style.padding = "20px";
    cursor.style.backgroundColor = "transparent";
    cursor.style.border = "0.5px solid #fff";
  });
  e.addEventListener("mouseleave", () => {
    cursor.style.padding = "0px";
    cursor.style.backgroundColor = "";
    cursor.style.border = "";
  });
});

const card = document.querySelectorAll(".card");

card.forEach((e) => {
  console.log(e);
  e.addEventListener("mouseenter", () => {
    cursor.style.padding = "20px";
    cursor.style.backgroundColor = "transparent";
    cursor.style.border = "0.5px solid #fff";
  });
  e.addEventListener("mouseleave", () => {
    cursor.style.padding = "0px";
    cursor.style.backgroundColor = "";
    cursor.style.border = "";
  });
});
const sliderSwiper = document.querySelectorAll(".sliderSwiper .swiper-slide");

sliderSwiper.forEach((e) => {
  console.log(e);
  e.addEventListener("mouseenter", () => {
    cursor.style.padding = "20px";
    cursor.style.backgroundColor = "transparent";
    cursor.style.border = "0.5px solid #fff";
  });
  e.addEventListener("mouseleave", () => {
    cursor.style.padding = "0px";
    cursor.style.backgroundColor = "";
    cursor.style.border = "";
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".sliderSwiper", {
  slidesPerView: 1,
  spaceBetween: 5,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 20000,
  loop: true,
  effect: "slide",
  effectOptions: {
    easing: "linear",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

gsap.from(".about-us-con", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".about-us-con",
    scroller: "body",
    start: "top 90%",
    end: "top 60%",
    scrub: 1,
  },
});

gsap.from(".swiper-text-con", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".swiper-text-con",
    scroller: "body",
    start: "top 90%",
    end: "top 60%",
    scrub: 1,
  },
});

gsap.from(".colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: ".colon1",
    scroller: "body",
    start: "top 30%",
    end: "top 45%",
    scrub: 3,
  },
});

gsap.from(".colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: ".colon1",
    scroller: "body",
    start: "top 30%",
    end: "top 45%",
    scrub: 3,
  },
});

gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.to(".navbar", {
  backgroundColor: "#000",
  height: "110px",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".navbar",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -50%",
    end: "top -80% ",
    scrub: 2,
  },
});
