// =========================================
// MOBILE NAVIGATION
// =========================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});


// =========================================
// CLOSE MOBILE MENU
// =========================================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// =========================================
// HEADER BACKGROUND ON SCROLL
// =========================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(255, 255, 255, 0.92)";
        header.style.backdropFilter = "blur(15px)";
        header.style.boxShadow = "0 5px 25px rgba(0,0,0,0.05)";

    } else {

        header.style.background = "transparent";
        header.style.backdropFilter = "none";
        header.style.boxShadow = "none";

    }

});


// =========================================
// SCROLL REVEAL
// =========================================

const revealElements = document.querySelectorAll(
    ".feature-card, .about-content, .about-visual, .stat-item, .cta-box"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


// =========================================
// SMOOTH CTA BUTTON DEMO
// =========================================

document.querySelectorAll(".primary-btn, .secondary-btn, .white-btn").forEach(button => {

    button.addEventListener("click", (event) => {

        const href = button.getAttribute("href");

        if (href === "#") {

            event.preventDefault();

            alert("Welcome to Nova! Your journey starts here.");

        }

    });

});