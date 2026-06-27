// Add a subtle "mechanical jitter" effect to the hero content
// This simulates the vibration of a car engine
const heroContent = document.querySelector('.hero-content');

document.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
    
    heroContent.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Log "System Check" to console (just for the aesthetic)
console.log("%c BEAM_NG_IR SYSTEM BOOTED ", "background: #00f2ff; color: #000; font-weight: bold;");
console.log("Status: Physics Engine Loaded...");
console.log("Status: Soft-body simulation ready.");
