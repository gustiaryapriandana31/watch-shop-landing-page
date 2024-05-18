// Parallax Effect
const buttonFindYours = document.getElementById("find_yours");
const textWatch = document.querySelector(".text-watch");
const textErs = document.querySelector(".text-ers");

window.onscroll = () => {
  let y = window.scrollY;
  console.log(y);

  buttonFindYours.style.transform = `translateX(-${y * 2.5}px)`;
  textWatch.style.transform = `translateX(-${y * 1.5}px)`;
  textErs.style.transform = `translateX(${y * 1.5}px)`;
};

// Mobile Navigation
const menu = document.getElementById("menu");
const navMobile = document.getElementById("nav-mobile");

menu.addEventListener("click", () => {
  navMobile.classList.toggle("animated");

  if (navMobile.classList.contains("hide")) {
    navMobile.classList.remove("hide");
    navMobile.classList.add("show");
  } else {
    navMobile.classList.remove("show");
    navMobile.classList.add("hide");
  }
});
