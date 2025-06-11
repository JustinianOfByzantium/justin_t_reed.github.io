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
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch nav.html");
        return res.text();
      })
      .then(html => {
        navbar.innerHTML = html;

        const currentPage = window.location.pathname.split("/").pop() || "index.html";
        console.log("Current page:", currentPage);

        const links = navbar.querySelectorAll("a[href]");
        console.log("Links found:", links);

        links.forEach(link => {
          const href = link.getAttribute("href");
          if (href === currentPage) {
            console.log("Setting active for:", href);
            link.classList.add("active");
          }
        });
      })
      .catch(err => console.error("Error loading nav:", err));
  } else {
    console.error("#navbar not found in the DOM");
  }
});


document.addEventListener("DOMContentLoaded", () => {
  var coll = document.getElementsByClassName("collapsible");
          var i;

          for (i = 0; i < coll.length; i++) {
              coll[i].addEventListener("click", function() {
                  this.classList.toggle("active");
                  var content = this.nextElementSibling;
                  if (content.style.maxHeight){
                      content.style.maxHeight = null;
                  } else {
                      content.style.maxHeight = content.scrollHeight + "px";
                  }
              });
          }
});




