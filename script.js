// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// 1. Initial Page Load Animation (Hero Text Reveal)
window.addEventListener('DOMContentLoaded', () => {
    const tl = gsap.timeline();

    // Subtle fade in for the navigation system
    tl.from('.navbar', {
        y: -30,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
    });

    // Massive typographic lines slide up into viewport
    tl.from('.hero-title', {
        y: 140,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out'
    }, '-=0.6');

    // Subtitle text fades in slightly delayed
    tl.from('.hero-subtitle', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.4');
});

// 2. Scroll Animation for Project Grid Cards
gsap.from('.project-card', {
    scrollTrigger: {
        trigger: '.project-grid',
        start: 'top 80%', // Triggers when the top of the grid hits 80% viewport height
        toggleActions: 'play none none none'
    },
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.25, // Staggers the arrival of each card
    ease: 'power3.out'
});

// 3. Scroll Animation for Workflow Pipeline Steps
gsap.from('.step-item', {
    scrollTrigger: {
        trigger: '.workflow-container',
        start: 'top 75%',
        toggleActions: 'play none none none'
    },
    x: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power2.out'
});
// Scroll Animation for Skeleton Structures
gsap.from('.skeleton-wrapper', {
    scrollTrigger: {
        trigger: '.skeleton-grid',
        start: 'top 85%', 
        toggleActions: 'play none none none'
    },
    y: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.3, // Loads them one after the other
    ease: 'power3.out'
});

// A cool effect: making the structural grid background fade in
gsap.from('.skeleton-wrapper .corner', {
    scrollTrigger: {
        trigger: '.skeleton-grid',
        start: 'top 85%',
    },
    scale: 0,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    delay: 0.5,
    ease: 'back.out(1.7)'
});
