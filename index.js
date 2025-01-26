const header = document.querySelector(".header");
const btnPhoneNav = document.querySelector(".btn-phone-nav");

btnPhoneNav.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});
