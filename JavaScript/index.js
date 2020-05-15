const navbar = document.querySelector("#navbar");
const email = document.querySelector("#email");

const appearOnScroll = function () {
  if (window.scrollY >= 470) {
    navbar.classList.remove("visibleOff");
    navbar.classList.add("visibleOn");
  } else {
    navbar.classList.remove("visibleOn");
    navbar.classList.add("visibleOff");
  }
};

window.addEventListener("scroll", appearOnScroll);

function process() {
  email.value = "";
}

//Scroll-functions
function scrollAbout() {
  window.scroll({ top: 530, behavior: "smooth" });
}

function scrollContact() {
  window.scroll({ top: 1150, behavior: "smooth" });
}

function up() {
  window.scroll({ top: 0, behavior: "smooth" });
}
