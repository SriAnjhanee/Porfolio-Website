/* ===============================
   PORTFOLIO SCRIPT
   - Typing Effect
   - Certifications Modal
   - Footer Year
   - Scroll To Top (About trigger)
   - Particles
   - Cursor Trail
   - Mobile Nav Toggle
   - Loader Hide
================================= */

document.addEventListener("DOMContentLoaded", () => {
  console.log("script.js loaded");

  /* ===============================
     1) Typing + Backspacing Effect
  ================================= */
  const texts = [
    "EEE Student at BVCE",
    "Full Stack Web Developer",
    "AI & Automation Enthusiast",
    "CyberSecurity Enthusiast",
  ];

  let index = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typingElement = document.getElementById("typing-text");

  /**
   * Handles typing and deleting animation in the hero section.
   * Rotates through the `texts` array infinitely.
   */
  function typeEffect() {
    if (!typingElement) return;

    const currentText = texts[index];

    if (!isDeleting) {
      // Typing mode
      typingElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;

      // When full word typed, pause before deleting
      if (charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1200);
        return;
      }
    } else {
      // Deleting mode
      typingElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;

      // When fully deleted, move to next word
      if (charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
      }
    }

    // Adjust typing/deleting speed
    setTimeout(typeEffect, isDeleting ? 55 : 85);
  }

  // Start the typing effect
  typeEffect();

  /* ===============================
     2) Certifications Modal
  ================================= */
  const certModal = document.getElementById("certModal");
  const certModalOverlay = document.getElementById("certModalOverlay");
  const certModalClose = document.getElementById("certModalClose");
  const certModalTitle = document.getElementById("certModalTitle");
  const certModalBody = document.getElementById("certModalBody");

  /**
   * Closes the certification modal and clears modal content.
   */
  function closeModal() {
    if (!certModal) return;

    certModal.classList.remove("show");
    if (certModalBody) certModalBody.innerHTML = "";
  }

  // Add click on certification cards only if modal elements exist
  if (certModal && certModalTitle && certModalBody) {
    document.querySelectorAll(".cert-card").forEach((card) => {
      card.addEventListener("click", () => {
        const file = card.getAttribute("data-cert");
        const title = card.getAttribute("data-title") || "Certificate";

        // Update modal title and show modal
        certModalTitle.textContent = title;
        certModalBody.innerHTML = "";
        certModal.classList.add("show");

        // Validate file path
        if (!file) {
          certModalBody.innerHTML =
            `<p style="color:white;font-weight:700;">Certificate file missing!</p>`;
          return;
        }

        // Render PDF or Image based on file extension
        if (file.toLowerCase().endsWith(".pdf")) {
          certModalBody.innerHTML =
            `<iframe src="${file}" style="width:100%;height:80vh;border:0;border-radius:14px;"></iframe>`;
        } else {
          certModalBody.innerHTML =
            `<img src="${file}" alt="${title}" style="width:100%;height:auto;border-radius:14px;">`;
        }
      });
    });
  }
certModal.classList.add("show");
document.body.classList.add("modal-open");

  // Modal close events
  if (certModalOverlay) certModalOverlay.addEventListener("click", closeModal);
  if (certModalClose) certModalClose.addEventListener("click", closeModal);

  // Close modal on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
    document.body.classList.remove("modal-open");

  });

  /* ===============================
     3) Footer Year
  ================================= */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ===============================
     4) Scroll To Top (Show after ABOUT)
     - Prefer about trigger point
     - Fallback: show after 400px
  ================================= */
  const scrollBtn =
    document.getElementById("scrollTopBtn") || document.querySelector(".scroll-top");

  const aboutSection =
    document.querySelector("#about-me") || document.querySelector("#about");

  if (scrollBtn) {
    // Ensure hidden initially
    scrollBtn.classList.remove("show");

    window.addEventListener("scroll", () => {
      // Fallback: if about section is missing, show after fixed scroll
      if (!aboutSection) {
        if (window.scrollY > 400) scrollBtn.classList.add("show");
        else scrollBtn.classList.remove("show");
        return;
      }

      // Show scroll button after reaching "About" section
      const triggerPoint = aboutSection.offsetTop - 200;

      if (window.scrollY >= triggerPoint) scrollBtn.classList.add("show");
      else scrollBtn.classList.remove("show");
    });

    // Smooth scroll to top
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ===============================
     5) Particles Generator
  ================================= */
  initializeParticles();

  /**
   * Initializes background particles inside the #particles container.
   */
  function initializeParticles() {
    const container = document.getElementById("particles");
    if (!container) return;

    // Clear existing particles (safety reset)
    container.innerHTML = "";

    for (let i = 0; i < 40; i++) createParticle(container);
  }

  /**
   * Creates one particle and re-creates it after it expires (loop).
   */
  function createParticle(container) {
    const particle = document.createElement("div");
    particle.className = "particle";

    // Random position
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";

    // Random delay for smooth distribution
    particle.style.animationDelay = Math.random() * 6 + "s";

    // Random size
    const size = Math.random() * 4 + 2;
    particle.style.width = size + "px";
    particle.style.height = size + "px";

    container.appendChild(particle);

    // Recycle particle
    setTimeout(() => {
      particle.remove();
      createParticle(container);
    }, 6000 + Math.random() * 3000);
  }

  /* ===============================
     6) Cursor Trail
     - Disabled on mobile for performance
  ================================= */
  initializeCursorTrail();

  /**
   * Creates a cursor trail effect on mouse movement (desktop only).
   */
  function initializeCursorTrail() {
    if (window.innerWidth <= 768) return;

    document.addEventListener("mousemove", (e) => {
      const trail = document.createElement("div");
      trail.className = "cursor-trail";
      trail.style.left = e.clientX + "px";
      trail.style.top = e.clientY + "px";

      document.body.appendChild(trail);

      setTimeout(() => trail.remove(), 550);
    });
  }

  /* ===============================
     7) Mobile Nav Toggle
  ================================= */
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
  }
});

/* ===============================
   8) Loader Hide
   - Must run after all assets load
   - Kept outside DOMContentLoaded
================================= */
window.addEventListener("load", () => {
  const loader = document.getElementById("loading-screen");

  if (loader) {
    loader.classList.add("hidden");

    // Remove from DOM after transition
    setTimeout(() => loader.remove(), 600);
  }
});
