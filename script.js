const menu = document.getElementById('menu');
const navMobile = document.getElementById('nav-mobile');

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