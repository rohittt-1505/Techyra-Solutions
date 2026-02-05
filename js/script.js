/* Scroll Reveal */
const elements = document.querySelectorAll('.card-futuristic');
window.addEventListener('scroll', () => {
    elements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add('show');
        }
    });
});

/* Typing */
const text = "Freelancer • Full Stack Developer • UI Specialist";
let i = 0;
function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}
typing();

/* Counter */
const counter = document.querySelector('.counter');
function updateCounter() {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const inc = target / 200;
    if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCounter, 10);
    } else {
        counter.innerText = target;
    }
}
updateCounter();

/* Close mobile menu on link click */
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.navbar-collapse').classList.remove('show');
    });
});

/* Particles Optimized */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const isMobile = window.innerWidth < 768;
let particleCount = isMobile ? 40 : 100;

let particles = [];
for (let i = 0; i < particleCount; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2,
        d: Math.random() * 0.8
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(0,255,200,0.5)";
    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        p.y += p.d;
        if (p.y > canvas.height) { p.y = 0; }
    });
    requestAnimationFrame(draw);
}
draw();
