// Custom Cursor
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // Dot cursor follows exactly
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Outline cursor follows with slight delay
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Hover effect for links
const links = document.querySelectorAll('a, .project-item');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorOutline.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    });
    link.addEventListener('mouseleave', () => {
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorOutline.style.backgroundColor = 'transparent';
    });
});

// Typed.js Animation for Hero Section
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById('typed-text')) {
        new Typed('#typed-text', {
            strings: [
                'Arquitetura Limpa', 
                'Resolução de Problemas', 
                'Interfaces Incríveis',
                'Engenharia de Software',
                'Performance e SEO'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            cursorChar: '_',
        });
    }

    // GSAP Scroll Animations
    gsap.registerPlugin(ScrollTrigger);

    // Fade Up Animation for general elements
    const fadeUpElements = document.querySelectorAll('.fade-up');
    fadeUpElements.forEach((element) => {
        gsap.fromTo(element, 
            { 
                y: 50, 
                opacity: 0 
            },
            {
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%", // Triggers when the top of the element is 85% down the viewport
                    toggleActions: "play none none reverse"
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out"
            }
        );
    });

    // Animate Hero title specifically
    gsap.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.2
    });

    gsap.from('.hero-subtitle', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
});
