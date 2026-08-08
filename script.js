/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".about-card, .service-card, .portfolio-card, .price-card, .testimonial-card, .contact-card, .footer-box"
);

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    element.classList.add("hidden");
    revealObserver.observe(element);
});


/* ================= SECTION TITLE ANIMATION ================= */

const sectionTitles = document.querySelectorAll(".section-title");

const titleObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            }
        });
    },
    {
        threshold: 0.3
    }
);

sectionTitles.forEach((title) => {
    titleObserver.observe(title);
});


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

}


/* Close mobile menu after clicking a link */

if (navbar) {

    const navLinks = navbar.querySelectorAll("a");

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {
            navbar.classList.remove("active");
        });

    });

}


/* ================= LOADER ================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {
        loader.classList.add("loader-hide");
    }

});


/* ================= BACK TO TOP ================= */

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* ================= PORTFOLIO FILTER ================= */

const filterButtons = document.querySelectorAll(".filter-buttons button");
const portfolioCards = document.querySelectorAll(".portfolio-card");

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        portfolioCards.forEach((card) => {

            if (filter === "all" || card.classList.contains(filter)) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* ================= SMOOTH SCROLL ================= */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

    anchor.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* ================= LIGHTBOX ================= */

const portfolioImages = document.querySelectorAll(".portfolio-card img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.querySelector(".close");

if (lightbox && lightboxImg) {

    portfolioImages.forEach((img) => {

        img.addEventListener("click", () => {

            lightbox.classList.add("active");
            lightboxImg.src = img.src;

        });

    });

    if (closeBtn) {

        closeBtn.addEventListener("click", () => {
            lightbox.classList.remove("active");
        });

    }

    lightbox.addEventListener("click", (event) => {

        if (event.target === lightbox) {
            lightbox.classList.remove("active");
        }

    });

}


/* ================= COPY UPI ================= */

function copyUPI() {

    const upi = document.getElementById("upiId");

    if (!upi) {
        return;
    }

    navigator.clipboard.writeText(upi.value)
        .then(() => {
            alert("UPI ID copied successfully!");
        })
        .catch(() => {
            upi.select();
            document.execCommand("copy");
            alert("UPI ID copied successfully!");
        });

}
