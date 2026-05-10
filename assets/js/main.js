/**
 * Codeoba Main JS - Final Fixes (v1.1.0)
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Preloader
    window.addEventListener('load', function() {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = 'none';
                    if (typeof AOS !== 'undefined') AOS.refresh();
                }, 500);
            }, 1000);
        }
    });

    // 2. AOS Animations
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            offset: 100,
            once: true
        });
    }

    // 3. Particles.js
    if (document.getElementById('particles-js') && typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#00D4FF" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.5, "random": false },
                "size": { "value": 3, "random": true },
                "line_linked": { "enable": true, "distance": 150, "color": "#00D4FF", "opacity": 0.2, "width": 1 },
                "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
                "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 1 } }, "push": { "particles_nb": 4 } }
            },
            "retina_detect": true
        });
    }

    // BUG 2: Typewriter Animation Fix
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
        const words = [
            "Website Developer", 
            "Mobile App Developer", 
            "AI Expert & Consultant", 
            "Server Specialist", 
            "Your Digital Partner"
        ];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 40 : 80;

            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        }
        type();
    }

    // BUG 1: Stats Counter Fix (Intersection Observer + CountUp)
    const statsSection = document.getElementById('stats') || document.querySelector('.stats-section');
    const counterElements = document.querySelectorAll('.stat-number');

    if (statsSection && counterElements.length > 0) {
        const countUp = (element) => {
            const labelText = element.closest('.stat-item').querySelector('.stat-label').textContent.toLowerCase();
            
            // Map labels to the required target values
            let targetValue = 0;
            let suffix = '';
            
            if (labelText.includes('lines')) { targetValue = 50000; }
            else if (labelText.includes('projects')) { targetValue = 100; suffix = '+'; }
            else if (labelText.includes('clients')) { targetValue = 50; suffix = '+'; }
            else if (labelText.includes('coffee')) { targetValue = 9999; }
            else { targetValue = parseInt(element.getAttribute('data-target')) || 0; }

            const duration = 2000;
            const startTime = performance.now();

            const animate = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function (easeOutQuad)
                const easedProgress = progress * (2 - progress);
                const currentValue = Math.floor(easedProgress * targetValue);
                
                // Formatting (comma for thousands)
                element.textContent = currentValue.toLocaleString() + suffix;

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    element.textContent = targetValue.toLocaleString() + suffix;
                }
            };

            requestAnimationFrame(animate);
        };

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                counterElements.forEach(countUp);
                observer.unobserve(statsSection);
            }
        }, { threshold: 0.3 });

        observer.observe(statsSection);
    }

    // 5. Custom Cursor
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    if (cursorDot && cursorOutline) {
        window.addEventListener('mousemove', function(e) {
            const posX = e.clientX;
            const posY = e.clientY;
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });
    }

    // 6. Navbar Scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) navbar.classList.add('scrolled');
            else navbar.classList.remove('scrolled');
        });
    }

    // 8. Skill Bars
    const skillBars = document.querySelectorAll('.skill-progress');
    if (skillBars.length > 0) {
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    bar.style.width = bar.getAttribute('data-width');
                    skillObserver.unobserve(bar);
                }
            });
        }, { threshold: 0.5 });
        skillBars.forEach(bar => skillObserver.observe(bar));
    }

    // 9. Portfolio Filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.getAttribute('data-filter');
                portfolioItems.forEach(item => {
                    if (filter === 'all' || item.classList.contains(filter)) {
                        item.style.display = 'block';
                        setTimeout(() => item.style.opacity = '1', 10);
                    } else {
                        item.style.opacity = '0';
                        setTimeout(() => item.style.display = 'none', 300);
                    }
                });
            });
        });
    }

    // 10. Back to Top Progress
    const backToTop = document.querySelector('#back-to-top');
    const progressPath = document.querySelector('#back-to-top path');
    if (backToTop && progressPath) {
        const pathLength = progressPath.getTotalLength();
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        window.addEventListener('scroll', function() {
            const scroll = window.scrollY;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            progressPath.style.strokeDashoffset = pathLength - (scroll * pathLength / height);
            if (scroll > 300) backToTop.classList.add('show');
            else backToTop.classList.remove('show');
        });
        backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // 11. Testimonials Carousel
    const carousel = document.querySelector('.testimonials-carousel');
    if (carousel) {
        const slides = carousel.querySelectorAll('.testimonial-slide');
        if (slides.length > 0) {
            let current = 0;
            const show = (n) => {
                slides.forEach(s => { s.style.display = 'none'; s.style.opacity = '0'; });
                slides[n].style.display = 'block';
                setTimeout(() => slides[n].style.opacity = '1', 10);
            };
            show(0);
            setInterval(() => { current = (current + 1) % slides.length; show(current); }, 5000);
        }
    }
});
