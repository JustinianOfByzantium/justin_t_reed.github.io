document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("scrollButton");
  const target = document.getElementById("targetSection");

  button.addEventListener("click", function () {
    target.scrollIntoView({ behavior: "smooth" });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  if (navbar) {
    fetch('nav.html')
      .then(res => res.text())
      .then(html => {
        navbar.innerHTML = html;
      });
      console.log("Loaded nav:", html);
      // Get the current path, e.g., 'index.html', 'projects.html'
      const currentPage = window.location.pathname.split("/").pop() || "index.html" || "hobbies.html";
      console.log("Current page:", currentPage);


      // Highlight the active link
      const links = navbar.querySelectorAll("a[href]");
      console.log("Found links:", links);

      links.forEach(link => {
        const linkPage = link.getAttribute("href");
        if (linkPage === currentPage) {
          link.classList.add("active");
        }
      });
  }
});



