// Initialize Lucide icons
lucide.createIcons();

// Mobile Menu Functionality
const mobileMenuBtn = document.getElementById("mobileMenu");
const mobileNav = document.getElementById("mobileNav");
const closeMobileNavBtn = document.getElementById("closeMobileNav");
const darkOverlay = document.getElementById("darkOverlay");
const mobileMenuIcon = mobileMenuBtn.querySelector("i");

// Open mobile menu
mobileMenuBtn.addEventListener("click", function () {
  mobileNav.classList.add("active");
  darkOverlay.classList.add("active");

  // Change hamburger icon to X
  mobileMenuIcon.setAttribute("data-lucide", "x");
  lucide.createIcons();
});

// Close mobile menu
closeMobileNavBtn.addEventListener("click", function () {
  mobileNav.classList.remove("active");
  darkOverlay.classList.remove("active");

  // Change X icon back to hamburger
  mobileMenuIcon.setAttribute("data-lucide", "menu");
  lucide.createIcons();
});

// Close mobile menu when clicking on links
const mobileLinks = document.querySelectorAll(".mobile-link");
mobileLinks.forEach((link) => {
  link.addEventListener("click", function () {
    mobileNav.classList.remove("active");
    darkOverlay.classList.remove("active");

    // Change X icon back to hamburger
    mobileMenuIcon.setAttribute("data-lucide", "menu");
    lucide.createIcons();
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", function (event) {
  if (
    !mobileNav.contains(event.target) &&
    !mobileMenuBtn.contains(event.target)
  ) {
    mobileNav.classList.remove("active");
    darkOverlay.classList.remove("active");

    // Change X icon back to hamburger
    mobileMenuIcon.setAttribute("data-lucide", "menu");
    lucide.createIcons();
  }
});

// Tab functionality for code display
const tabs = document.querySelectorAll(".tab");
const codeContent = document.querySelector("pre code");

const codeExamples = {
  HTML: `<section class="hero">
  <div class="container">
    <h1>Bem-vindo à sua nova página!</h1>
    <p>Design criado automaticamente pela IA.</p>
  </div>
</section>`,
  Tailwind: `<section class="hero bg-gray-900 text-white py-20">
  <div class="container mx-auto px-4">
    <h1 class="text-4xl font-bold mb-4">Bem-vindo à sua nova página!</h1>
    <p class="text-lg">Design criado automaticamente pela IA.</p>
  </div>
</section>`,
  CSS: `.hero {
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 80px 20px;
  text-align: center;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.125rem;
  opacity: 0.8;
}`,
};

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    // Remove active class from all tabs
    tabs.forEach((t) => t.classList.remove("active"));
    // Add active class to clicked tab
    this.classList.add("active");

    // Update code content
    const tabName = this.textContent;
    codeContent.textContent = codeExamples[tabName];
  });
});

// Copy code functionality
const copyBtn = document.querySelector(".copy-btn");
if (copyBtn) {
  copyBtn.addEventListener("click", function () {
    const code = codeContent.textContent;
    navigator.clipboard.writeText(code).then(() => {
      const originalText = this.textContent;
      this.textContent = "Copiado!";
      setTimeout(() => {
        this.textContent = originalText;
      }, 2000);
    });
  });
}

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
