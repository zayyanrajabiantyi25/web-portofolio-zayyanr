document.addEventListener("DOMContentLoaded", () => {
  // === Scroll Spy Navbar ===
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav ul li a");

  function setActiveLink() {
    const pos = window.scrollY + 160; 
    let currentId = null;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const bottom = top + sec.offsetHeight;
      if (pos >= top && pos < bottom) {
        currentId = sec.id;
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute("href"); 
      const match = href && currentId && href === `#${currentId}`;
      link.classList.toggle("active", Boolean(match));
    });
  }

  // jalankan saat load + scroll
  setActiveLink();
  window.addEventListener("scroll", setActiveLink);

  // === Contact Form ===
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Thanks for reaching out! I’ll get in touch with you soon");
      form.reset();
    });
  }
});
