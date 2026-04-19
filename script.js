const container = document.querySelector(".particles");

const particles = [];

for (let i = 0; i < 50; i++) {
  const dot = document.createElement("div");
  dot.classList.add("particle");


  let x = Math.random() * 100;
  let y = Math.random() * 100 + 100; 

  const speed = Math.random() * 0.05 + 0.02; 
  const drift = Math.random() * 0.02 - 0.01; 

  dot.style.left = x + "vw";
  dot.style.top = y + "vh";

  container.appendChild(dot);

  particles.push({ dot, x, y, speed, drift });
}

function animate() {
  particles.forEach(p => {
    p.y -= p.speed;   
    p.x += p.drift;   

  
    if (p.y < -10) {
      p.y = 110;
      p.x = Math.random() * 100;
    }

    p.dot.style.top = p.y + "vh";
    p.dot.style.left = p.x + "vw";
  });

  requestAnimationFrame(animate);
}

animate();

const elements = document.querySelectorAll(
  "section *:not(script):not(style)"
);


elements.forEach((el) => {
  el.classList.add("reveal");
 
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach(el => {
  observer.observe(el);
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 250;

    if (window.scrollY >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });

});