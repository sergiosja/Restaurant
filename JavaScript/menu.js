const navbar = document.querySelector("#navbar");

const appearOnScroll = function () {
  if (window.scrollY >= 599) {
    navbar.classList.remove("visibleOff");
  } else {
    navbar.classList.add("visibleOff");
  }
};

window.addEventListener("scroll", appearOnScroll);

//Scroll-functions
function scrollStarters() {
  window.scroll({ top: 600, behavior: "smooth" });
}

function scrollPizza() {
  window.scroll({ top: 1135, behavior: "smooth" });
}

function scrollSoup() {
  window.scroll({ top: 1775, behavior: "smooth" });
}

function scrollSalad() {
  window.scroll({ top: 2300, behavior: "smooth" });
}

function scrollDessert() {
  window.scroll({ top: 3000, behavior: "smooth" });
}

function up() {
  window.scroll({ top: 0, behavior: "smooth" });
}
