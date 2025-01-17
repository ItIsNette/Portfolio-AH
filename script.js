// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Contact Form Alert
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
});
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });
});
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    let body = document.querySelector("body");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
        body.classList.add("scrolled"); // Reduce padding when scrolling
    } else {
        header.classList.remove("scrolled");
        body.classList.remove("scrolled"); // Reset padding at the top
    }
});
// 📱 Mobile Navbar Toggle
function toggleMenu() {
    let navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("active");
}

// Close menu when clicking a nav link (fixes the issue)
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function () {
        document.getElementById("nav-menu").classList.remove("active");
    });
});

// 🌙 Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    // Save preference in local storage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// 🌓 Load Dark Mode Preference
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
});
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("section").forEach(section => {
        section.style.display = "block";
    });
});
// 🎬 Animate sections when scrolling
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });
});
// 🎯 Back to Top Button
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

