// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// =========================================
// 1. CINEMATIC SPLASH SCREEN & REVEAL
// =========================================
window.addEventListener('DOMContentLoaded', () => {
    const tl = gsap.timeline();
    
    let progress = { value: 0 };
    const percentageText = document.querySelector('.loading-percentage');

    // Make the numbers count from 0 to 100 and the red bar fill up
    tl.to(progress, {
        value: 100,
        duration: 2.5,
        ease: "power2.inOut",
        onUpdate: () => {
            percentageText.innerText = Math.round(progress.value) + "%";
        }
    })
    .to('.loading-bar', { width: "100%", duration: 2.5, ease: "power2.inOut" }, "<")
    
    // Flash the "Assets Optimized" terminal text
    .to('.terminal-string', { opacity: 1, duration: 0.1 })
    .to('.terminal-string', { opacity: 0, duration: 0.1, delay: 0.4 })
    
    // Slide the black screen violently up and away to reveal the site
    .to('.splash-screen', {
        yPercent: -100,
        duration: 1.2,
        ease: "power4.inOut"
    })
    
   // =====================================
    // THE HERO REVEAL (Starts as the black screen leaves)
    // =====================================
    .fromTo('.navbar', 
        { y: -30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: 'power4.out', clearProps: "all" }
    , "-=0.6")
    .from('.hero-title', {
        y: 140, opacity: 0, duration: 1.2, stagger: 0.15, ease: 'power4.out'
    }, '-=0.8')
    .from('.hero-subtitle', {
        y: 20, opacity: 0, duration: 0.8, ease: 'power3.out'
    }, '-=0.4');
});

// =========================================
// 2. PROJECT CARDS & SKELETON ANIMATIONS
// =========================================
gsap.from('.project-card', {
    scrollTrigger: { trigger: '.project-grid', start: 'top 80%', toggleActions: 'play none none none' },
    y: 60, opacity: 0, duration: 1, stagger: 0.25, ease: 'power3.out'
});

gsap.from('.step-item', {
    scrollTrigger: { trigger: '.workflow-container', start: 'top 75%', toggleActions: 'play none none none' },
    x: 50, opacity: 0, duration: 1, stagger: 0.2, ease: 'power2.out'
});

gsap.from('.skeleton-wrapper', {
    scrollTrigger: { trigger: '.skeleton-grid', start: 'top 85%', toggleActions: 'play none none none' },
    y: 40, opacity: 0, duration: 1, stagger: 0.3, ease: 'power3.out'
});

gsap.from('.skeleton-wrapper .corner', {
    scrollTrigger: { trigger: '.skeleton-grid', start: 'top 85%' },
    scale: 0, opacity: 0, duration: 0.8, stagger: 0.1, delay: 0.5, ease: 'back.out(1.7)'
});

// =========================================
// 3. CRITICAL PHYSICS: SCROLL VELOCITY DIAMOND
// =========================================
let lastScrollY = window.scrollY;
const diamond = document.querySelector('.diamond');
const glow = document.querySelector('.diamond-glow');

window.addEventListener('scroll', () => {
    let currentScrollY = window.scrollY;
    let scrollSpeed = Math.abs(currentScrollY - lastScrollY);
    
    if (scrollSpeed > 2) {
        gsap.to(glow, { opacity: 0.8, scale: 1.8, duration: 0.3, overwrite: "auto" });
        gsap.to(diamond, { rotation: "+=45", duration: 0.5, ease: "power1.out", overwrite: "auto" });
    } else {
        gsap.to(glow, { opacity: 0.3, scale: 1, duration: 1, overwrite: "auto" });
    }
    lastScrollY = currentScrollY;
});

// =========================================
// 4. 3D GLASS TILT PHYSICS (THE APPLE EFFECT)
// =========================================
VanillaTilt.init(document.querySelectorAll(".project-card, .skeleton-wrapper"), {
    max: 8,                  // How steep the 3D tilt is
    speed: 400,              // How fast it reacts to touch/mouse
    glare: true,             // Turns on the physical glass reflection
    "max-glare": 0.15,       // Keeps the glare subtle and premium
    scale: 1.02,             // Very slight pop-out effect
    gyroscope: true          // Allows phone movement to tilt the cards
});
