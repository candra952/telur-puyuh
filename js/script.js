// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika balado menu di klik
document.querySelector("#balado-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const balado = document.querySelector("#balado-menu");
document.addEventListener("click", function (e) {
  if (!balado.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
