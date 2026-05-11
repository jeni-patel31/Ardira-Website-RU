// ═════════════════════════════════════════════════════════════════════════════════
// ARDIRA WEBSITE - INTERACTIVE FEATURES
// ═════════════════════════════════════════════════════════════════════════════════

document.addEventListener("DOMContentLoaded", function () {
  initProductTabs();
  initFormHandling();
  initScrollAnimations();
  initNavigation();
  initAutoplayTabs();
});

// ═════════════════════════════════════════════════════════════════════════════════
// PRODUCT TABS FUNCTIONALITY
// ═════════════════════════════════════════════════════════════════════════════════

function initProductTabs() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const productPanels = document.querySelectorAll(".product-panel");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons and panels
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      productPanels.forEach((panel) => panel.classList.remove("active"));

      // Add active class to clicked button and corresponding panel
      button.classList.add("active");
      const tabId = button.getAttribute("data-tab");
      const activePanel = document.getElementById(tabId);
      if (activePanel) {
        activePanel.classList.add("active");
      }

      // Stop autoplay when user interacts
      stopAutoplay();
      startAutoplay();
    });
  });
}

// ═════════════════════════════════════════════════════════════════════════════════
// AUTO-PLAY TABS
// ═════════════════════════════════════════════════════════════════════════════════

let autoplayTimer;
const tabs = [
  "surveyvista",
  "formvista",
  "compliancevista",
  "agentvista",
  "relationshipvista",
];
let currentTabIndex = 0;

function startAutoplay() {
  autoplayTimer = setInterval(() => {
    nextTab();
  }, 5000);
}

function stopAutoplay() {
  clearInterval(autoplayTimer);
}

function nextTab() {
  currentTabIndex = (currentTabIndex + 1) % tabs.length;
  const tabButton = document.querySelector(
    `[data-tab="${tabs[currentTabIndex]}"]`,
  );
  if (tabButton) {
    tabButton.click();
  }
}

// Start autoplay on load
startAutoplay();

// Stop autoplay on mouse enter, resume on mouse leave
const productTabs = document.querySelector(".product-tabs");
if (productTabs) {
  productTabs.addEventListener("mouseenter", stopAutoplay);
  productTabs.addEventListener("mouseleave", startAutoplay);
}

// ═════════════════════════════════════════════════════════════════════════════════
// FORM HANDLING
// ═════════════════════════════════════════════════════════════════════════════════

function initFormHandling() {
  const form = document.querySelector(".contact-form");
  if (!form) return;

  const submitButton = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const formData = new FormData(form);
    const data = {
      name: form.querySelector('input[type="text"]').value,
      email: form.querySelector('input[type="email"]').value,
      phone: form.querySelector('input[type="tel"]').value,
      company: form.querySelectorAll('input[type="text"]')[1].value,
      product: form.querySelector("select").value,
      message: form.querySelector("textarea").value,
    };

    // Validate required fields
    if (!data.name || !data.email) {
      alert("Please fill in all required fields");
      return;
    }

    // Show success message
    submitButton.textContent = "✓ Message Sent!";
    submitButton.style.background = "#2a8f38";
    submitButton.disabled = true;

    // Reset form
    form.reset();

    // Reset button after 3 seconds
    setTimeout(() => {
      submitButton.textContent = "Send Message";
      submitButton.style.background = "";
      submitButton.disabled = false;
    }, 3000);

    console.log("Form submitted with data:", data);
  });
}

// ═════════════════════════════════════════════════════════════════════════════════
// SCROLL ANIMATIONS
// ═════════════════════════════════════════════════════════════════════════════════

function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe elements with scroll animation
  document
    .querySelectorAll(".section-header, .feature-card, .stat-card")
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(el);
    });
}

// ═════════════════════════════════════════════════════════════════════════════════
// SMOOTH NAVIGATION
// ═════════════════════════════════════════════════════════════════════════════════

function initNavigation() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#") return;

      e.preventDefault();

      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Close mobile menu if open
        const navMenu = document.querySelector(".nav-menu");
        if (navMenu) {
          navMenu.classList.remove("active");
        }
      }
    });
  });

  // Update active nav link on scroll
  updateActiveNavLink();
  window.addEventListener("scroll", updateActiveNavLink);
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

// ═════════════════════════════════════════════════════════════════════════════════
// SCROLL TO TOP BUTTON
// ═════════════════════════════════════════════════════════════════════════════════

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.pageYOffset > 100) {
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.boxShadow = "";
  }
});

// ═════════════════════════════════════════════════════════════════════════════════
// MOBILE MENU TOGGLE (if needed for future)
// ═════════════════════════════════════════════════════════════════════════════════

function initMobileMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    // Close menu when clicking on a link
    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }
}

initMobileMenu();

// ═════════════════════════════════════════════════════════════════════════════════
// UTILITY FUNCTIONS
// ═════════════════════════════════════════════════════════════════════════════════

// Debounce function for better performance
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Throttle function
function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// ═════════════════════════════════════════════════════════════════════════════════
// PERFORMANCE OPTIMIZATIONS
// ═════════════════════════════════════════════════════════════════════════════════

// Lazy load images
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add("loaded");
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img);
  });
}

// ═════════════════════════════════════════════════════════════════════════════════
// CONSOLE MESSAGES
// ═════════════════════════════════════════════════════════════════════════════════

console.log(
  "%cArdira Website Loaded ✨",
  "color: #39B44A; font-size: 14px; font-weight: bold;",
);
console.log(
  "%c100% Salesforce-Native Applications",
  "color: #1a2b3c; font-size: 12px;",
);
