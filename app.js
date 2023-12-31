/** @format */

const ham = document.querySelector(".ham");
const menu = document.querySelector(".menu");
//const new;
ham.addEventListener("click", function () {
  ham.classList.toggle("active");
  menu.classList.toggle("on");
  
});
