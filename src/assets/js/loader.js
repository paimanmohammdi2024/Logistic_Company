// loader.js

// Show loader before navigating away
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a[href]");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = link.getAttribute("href");

      // Ignore anchor, mail, tel, and external links
      if (
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        link.target === "_blank"
      ) {
        return;
      }

      e.preventDefault();

      const loader = document.getElementById("page-loader");
      if (loader) loader.classList.remove("hidden");

      // Navigate after a short delay
      setTimeout(() => {
        window.location.href = href;
      }, 300);
    });
  });

  // Hide loader on page load
  window.addEventListener("load", function () {
    const loader = document.getElementById("page-loader");
    if (loader) loader.classList.add("hidden");
  });
});
