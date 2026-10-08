const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


/* Reveal elements when they enter the screen */

const revealElements = document.querySelectorAll(
    ".section, .project-card, .skill-row, .education-card"
);

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.08
    }
);

revealElements.forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
});


/* Current year */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* Subtle cursor glow on desktop */

if (window.matchMedia("(pointer: fine)").matches) {

    const glow = document.createElement("div");

    glow.style.position = "fixed";
    glow.style.width = "180px";
    glow.style.height = "180px";
    glow.style.borderRadius = "50%";
    glow.style.pointerEvents = "none";
    glow.style.background =
        "radial-gradient(circle, rgba(138,114,80,0.08), transparent 70%)";
    glow.style.transform = "translate(-50%, -50%)";
    glow.style.zIndex = "-1";

    document.body.appendChild(glow);

    document.addEventListener("mousemove", event => {
        glow.style.left = `${event.clientX}px`;
        glow.style.top = `${event.clientY}px`;
    });
}
