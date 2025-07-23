AOS.init();

function opentab(event, tabname) {
  const tablinks = Array.from(document.getElementsByClassName("tab-links"));
  const tabcontents = Array.from(document.getElementsByClassName("tab-contents"));
  tablinks.forEach(link => link.classList.remove("active-link"));
  tabcontents.forEach(tab => tab.classList.remove("active-tab"));
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

const navLinks = document.querySelector("nav ul");
const openMenuIcon = document.querySelector("nav .fa-bars");
const closeMenuIcon = document.querySelector("nav ul .fa-circle-xmark");

openMenuIcon.addEventListener("click", () => {
  navLinks.style.right = "0";
});

closeMenuIcon.addEventListener("click", () => {
  navLinks.style.right = "-400px";
});