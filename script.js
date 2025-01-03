document.addEventListener('DOMContentLoaded', () => {
    // Matrix background effect
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    document.getElementById('matrix-bg').appendChild(canvas);

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const columns = Math.floor(width / 20);
    const drops = [];

    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    const draw = () => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, width, height);

        ctx.fillStyle = '#0f0';
        ctx.font = '15px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = String.fromCharCode(Math.floor(Math.random() * 128));
            ctx.fillText(text, i * 20, drops[i] * 20);

            if (drops[i] * 20 > height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i]++;
        }
    };

    setInterval(draw, 33);

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    // Typewriter effect
    const typewriterElement = document.querySelector('.typewriter');
    const text = typewriterElement.getAttribute('data-text');
    typewriterElement.removeAttribute('data-text');
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typewriterElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();

   
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission (you can add your own logic here)
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Form submitted! (This is a demo, no actual submission occurred)');
    });
});


// Dynamic Year Update
document.getElementById("year").textContent = new Date().getFullYear();

// Dynamic Color Change for Footer Text
const footerText = document.querySelector(".footer-text");
const colors = ["#ff6b6b", "#6bffb3", "#6ba5ff", "#ffb36b", "#d36bff"]; // Dynamic colors
let colorIndex = 0;

// Change colors every 2 seconds
setInterval(() => {
    footerText.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length; // Loop through colors
}, 2000);
document.addEventListener("DOMContentLoaded", () => {
    const skillBars = document.querySelectorAll('.skill-bar .fill');
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-percentage');
        bar.style.width = width + '%';
    });
});




document.addEventListener("DOMContentLoaded", () => {
    const skillBars = document.querySelectorAll('.skill-bar');

    skillBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        const fill = document.createElement('div'); // Create fill div
        fill.classList.add('skill-bar-fill');
        fill.style.width = percentage + '%'; // Animate width based on percentage
        bar.appendChild(fill);
    });
});