// Glass Tilt Effect for Cards
const cards = document.querySelectorAll('.glass-panel');

document.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 100;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 100;
    
    // Apply a subtle parallax to the background grid
    document.querySelector('.grid-overlay').style.transform = `translate(${xAxis}px, ${yAxis}px)`;
});

// Add interactive tilt to cards
cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element
        const y = e.clientY - rect.top;  // y position within the element
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    });
});

console.log("BEAM_NG_IR Interface: Glass Mode Enabled.");
