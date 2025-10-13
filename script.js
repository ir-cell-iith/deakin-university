const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

backToTopButton.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Smooth scrolling for navigation links (only for internal anchors)
document.querySelectorAll("a.nav-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    // Only prevent default for internal anchor links (starting with #)
    if (targetId && targetId.startsWith("#")) {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    }
    // For external links and other URLs, let the default behavior happen
  });
});
// Better navbar closing for Bootstrap 5
// Better navbar closing for Bootstrap 5
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const navbarCollapse = document.querySelector(".navbar-collapse");
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarClose = document.querySelector(".navbar-close");

  // Close navbar when clicking on menu items
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarCollapse.classList.contains("show")) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false,
        });
        bsCollapse.hide();
      }
    });
  });

  // Close navbar when clicking the close button
  if (navbarClose) {
    navbarClose.addEventListener("click", () => {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false,
      });
      bsCollapse.hide();
    });
  }

  // Close navbar when clicking outside (optional)
  document.addEventListener("click", (event) => {
    if (
      navbarCollapse.classList.contains("show") &&
      !event.target.closest(".navbar-collapse") &&
      !event.target.closest(".navbar-toggler")
    ) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false,
      });
      bsCollapse.hide();
    }
  });
});
