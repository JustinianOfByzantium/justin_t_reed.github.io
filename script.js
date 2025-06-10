document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("scrollButton");
  const target = document.getElementById("targetSection");

  button.addEventListener("click", function () {
    target.scrollIntoView({ behavior: "smooth" });
  });
});





