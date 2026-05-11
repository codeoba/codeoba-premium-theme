/**
 * Codeoba Main JS - Final Stability Update (v1.2.2)
 */

document.addEventListener('DOMContentLoaded', function() {
    
    let isInitialized = false;

    // Core Initialization Function
    function initializeAll() {
        if (isInitialized) return;
        isInitialized = true;

        console.log("Initializing Codeoba Theme Engine...");

        // 1. AOS Init
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                once: true,
                offset: 100
            });
        }

        // 2. GSAP Animations
        if (typeof gsap !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
            
            // Staggered reveal for Bento Grid
            gsap.from(".bento-item", {
                scrollTrigger: {
                    trigger: ".bento-grid",
                    start: "top 85%",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out"
            });

            // Stats Counter
            const statsSection = document.querySelector('.stats-section');
            if (statsSection) {
                ScrollTrigger.create({
                    trigger: statsSection,
                    start: "top 80%",
                    onEnter: () => {
                        document.querySelectorAll('.stat-number').forEach(el => {
                            const target = parseInt(el.getAttribute('data-target')) || 0;
                            const label = el.closest('.stat-item').querySelector('.stat-label').textContent.toLowerCase();
                            let suffix = (label.includes('project') || label.includes('client')) ? '+' : '';
                            
                            gsap.to({ val: 0 }, {
                                val: target,
                                duration: 2,
                                ease: "power2.out",
                                onUpdate: function() {
                                    el.textContent = Math.floor(this.targets()[0].val).toLocaleString() + suffix;
                                }
                            });
                        });
                    }
                });
            }
        }

        // 3. Swiper Initialization
        if (typeof Swiper !== 'undefined') {
            new Swiper('.testimonials-swiper', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }
            });
        }

        // 4. Vanilla-Tilt
        if (typeof VanillaTilt !== 'undefined') {
            VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
                max: 10,
                speed: 400,
                glare: true,
                "max-glare": 0.2,
            });
        }
    }

    // Preloader Control
    window.addEventListener('load', function() {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            gsap.to(preloader, {
                opacity: 0,
                duration: 0.6,
                onComplete: () => {
                    preloader.style.display = 'none';
                    initializeAll();
                }
            });
        } else {
            initializeAll();
        }
    });

    // Fail-safe: Initialize if preloader is stuck or window load event fired late
    setTimeout(initializeAll, 3000);

    // 5. Magnetic Buttons
    if (typeof gsap !== 'undefined') {
        const magneticBtns = document.querySelectorAll('.btn-primary, .btn-outline, .whatsapp-float');
        magneticBtns.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.3 });
            });
            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
            });
        });
    }

    // 6. Typewriter
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
        const words = ["Website Developer", "Mobile App Developer", "AI Expert & Consultant", "Server Specialist", "Your Digital Partner"];
        let wordIdx = 0, charIdx = 0, isDeleting = false;
        function type() {
            const word = words[wordIdx];
            typewriterElement.textContent = isDeleting ? word.substring(0, charIdx--) : word.substring(0, charIdx++);
            let speed = isDeleting ? 40 : 80;
            if (!isDeleting && charIdx > word.length) { speed = 2000; isDeleting = true; }
            else if (isDeleting && charIdx < 0) { isDeleting = false; wordIdx = (wordIdx + 1) % words.length; speed = 500; charIdx = 0; }
            setTimeout(type, speed);
        }
        type();
    }

    // 7. Particles
    if (document.getElementById('particles-js') && typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": { "value": 50, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#00D4FF" },
                "opacity": { "value": 0.2 },
                "size": { "value": 2 },
                "line_linked": { "enable": true, "distance": 150, "color": "#00D4FF", "opacity": 0.1, "width": 1 },
                "move": { "enable": true, "speed": 1 }
            },
            "interactivity": { "events": { "onhover": { "enable": true, "mode": "grab" } } },
            "retina_detect": true
        });
    }

    // 8. Custom Cursor
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    if (cursorDot && cursorOutline && typeof gsap !== 'undefined') {
        window.addEventListener('mousemove', (e) => {
            gsap.to(cursorDot, { x: e.clientX, y: e.clientY, duration: 0.1 });
            gsap.to(cursorOutline, { x: e.clientX, y: e.clientY, duration: 0.3 });
        });
    }

    // 9. Portfolio Filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    gsap.to(item, { scale: 1, opacity: 1, duration: 0.4, display: 'block' });
                } else {
                    gsap.to(item, { scale: 0.8, opacity: 0, duration: 0.4, display: 'none' });
                }
            });
        });
    });

    // 10. Navbar & Back to Top
    const navbar = document.querySelector('.navbar');
    const backToTop = document.querySelector('#back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
        if (window.scrollY > 300) backToTop.classList.add('show');
        else backToTop.classList.remove('show');
    });
    if (backToTop) backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
});
