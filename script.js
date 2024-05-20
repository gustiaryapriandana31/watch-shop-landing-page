// // Parallax Effect
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

// Watch Contents Tabbed Navigation
let buttons = document.querySelectorAll(".button");
let watchs = document.getElementById("smartwatch");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    let target = this.getAttribute("data-target"); // Mendapatkan target dari data attribute

    let watchContent = document.querySelector(
      `div.watch[data-watch="${target}"]`
    );

    if (watchContent) {
      // Menambah atau menghapus kelas hidden untuk semua watch yang tidak dipilih
      let allWatch = document.querySelectorAll(".watch");
      allWatch.forEach(function (watch) {
        if (watch.getAttribute("data-watch") === target) {
          watch.classList.remove("hidden");
        } else {
          watch.classList.add("hidden");
        }
      });

      // Mengisi div dengan konten sesuai target
      watchs.innerHTML = watchContent.innerHTML;
    } else {
      watchs.innerHTML = "Konten tidak ditemukan";
      watchs.style.color = "white";
    }
  });
});

// Watch Features Description
const numbers = document.querySelectorAll(".number");
const description = document.querySelectorAll(".description");
const closeButton = document.querySelectorAll(".close");
const nextButton = document.querySelectorAll(".next");

numbers.forEach(function (number) {
  number.addEventListener('click', () => {
    let target = number.getAttribute("data-target");

    description.forEach(function (desc) {
      if (desc.getAttribute("data-desc") === target) {
        desc.classList.remove("hidden");
      } else {
        desc.classList.add("hidden");
      }
    });
  })
});

closeButton.forEach(function (closeB) {
  closeB.addEventListener("click", () => {
    description.forEach(function (desc) {
      desc.classList.add("hidden");
    });
  });
});


const mobileLink = document.querySelectorAll(".link");
mobileLink.forEach(function (link){
  link.addEventListener("click", () => {
    navMobile.classList.remove("active");
    navMobile.classList.add("active");
  });
}) 