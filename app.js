const btn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

// btn.addEventListener("click", function () {
//   links.classList.contains("show-links")
//     ? links.classList.remove("show-links")
//     : links.classList.add("show-links");
// });

btn.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
