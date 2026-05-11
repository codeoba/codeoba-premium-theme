/**
 * Codeoba Main JS - Apex Update (v1.2.0)
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Preloader & AOS Init
    window.addEventListener('load', function() {
        const preloader = document.getElementById('preloader');
        
        // Fail-safe AOS Init
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100,
                delay: 200
            });
        }

        if (preloader) {
            gsap.to(preloader, {
                opacity: 0,
                duration: 0.8,
                ease: "power2.inOut",
                onComplete: () => {
                    preloader.style.display = 'none';
                    initGSAPAnimations();
                }
            });
        }
    });

    // Fail-safe: Force hide preloader if it's still there after 5s
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader && preloader.style.display !== 'none') {
            preloader.style.display = 'none';
            if (typeof AOS !== 'undefined') AOS.init();
        }
    }, 5000);

    // 2. Vanilla-Tilt Initialization
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.3,
            scale: 1.02
        });
    }

    // 3. Magnetic Buttons
    const magneticBtns = document.querySelectorAll('.btn-primary, .btn-outline, .whatsapp-float');
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', function(e) {
            const position = btn.getBoundingClientRect();
            const x = e.pageX - position.left - position.width / 2;
            const y = e.pageY - position.top - position.height / 2;
            
            gsap.to(btn, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        btn.addEventListener('mouseleave', function(e) {
            gsap.to(btn, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "elastic.out(1, 0.3)"
            });
        });
    });

    // 4. Enhanced Custom Cursor
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    if (cursorDot && cursorOutline) {
        window.addEventListener('mousemove', (e) => {
            gsap.to(cursorDot, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1
            });
            gsap.to(cursorOutline, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3
            });
        });
    }

    // 5. GSAP Reveal Animations
    function initGSAPAnimations() {
        gsap.registerPlugin(ScrollTrigger);

        // Staggered reveal for Bento Grid
        gsap.from(".bento-item", {
            scrollTrigger: {
                trigger: ".bento-grid",
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        });

        // Portfolio items staggered reveal
        gsap.from(".portfolio-item", {
            scrollTrigger: {
                trigger: ".portfolio-grid",
                start: "top 80%",
            },
            scale: 0.9,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)"
        });
    }

    // 6. Particles.js (Legacy support)
    if (document.getElementById('particles-js') && typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#00D4FF" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.3 },
                "size": { "value": 2 },
                "line_linked": { "enable": true, "distance": 150, "color": "#00D4FF", "opacity": 0.1, "width": 1 },
                "move": { "enable": true, "speed": 1 }
            },
            "interactivity": {
                "events": { "onhover": { "enable": true, "mode": "grab" } }
            },
            "retina_detect": true
        });
    }

    // 7. Typewriter (Vanilla)
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

    // 8. Stats Counter (Enhanced with GSAP)
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        ScrollTrigger.create({
            trigger: statsSection,
            start: "top 80%",
            onEnter: () => {
                document.querySelectorAll('.stat-number').forEach(el => {
                    const target = parseInt(el.getAttribute('data-target')) || 0;
                    const suffix = (el.closest('.stat-item').querySelector('.stat-label').textContent.toLowerCase().includes('project') || 
                                   el.closest('.stat-item').querySelector('.stat-label').textContent.toLowerCase().includes('client')) ? '+' : '';
                    
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

    // 9. Navbar Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    });

    // 10. Portfolio Filter
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

    // 11. Back to Top Progress
    const backToTop = document.querySelector('#back-to-top');
    const progressPath = document.querySelector('#back-to-top path');
    if (backToTop && progressPath) {
        const pathLength = progressPath.getTotalLength();
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        window.addEventListener('scroll', () => {
            const scroll = window.scrollY, height = document.documentElement.scrollHeight - window.innerHeight;
            progressPath.style.strokeDashoffset = pathLength - (scroll * pathLength / height);
            if (scroll > 300) backToTop.classList.add('show'); else backToTop.classList.remove('show');
        });
        backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }
});
