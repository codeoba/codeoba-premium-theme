<section id="services" class="services-section">
    <div class="container">
        <div class="section-header" data-aos="fade-up">
            <h2 class="section-title">My <span class="cyan">Services</span></h2>
            <div class="title-underline"></div>
        </div>

        <div class="bento-grid">
            <!-- 1. Web Dev (Large Feature) -->
            <div class="bento-item large glass-card service-card" data-aos="fade-up" data-tilt data-tilt-glare data-tilt-max-glare="0.3">
                <div class="service-icon"><i class="fas fa-code"></i></div>
                <h3>Website Development</h3>
                <p>Building ultra-fast, responsive, and SEO-optimized websites using modern stacks like Next.js, WordPress, and Custom PHP. Focused on conversion and user experience.</p>
                <ul class="service-tags">
                    <li>#FullStack</li>
                    <li>#Performance</li>
                </ul>
            </div>

            <!-- 2. Mobile App (Vertical Tall) -->
            <div class="bento-item tall glass-card service-card" data-aos="fade-up" data-aos-delay="100" data-tilt data-tilt-glare data-tilt-max-glare="0.3">
                <div class="service-icon"><i class="fas fa-mobile-alt"></i></div>
                <h3>Mobile Apps</h3>
                <p>Native-feel cross-platform mobile applications for iOS and Android using Flutter and React Native.</p>
                <div class="service-tags">
                    <li>#Flutter</li>
                    <li>#MobileUX</li>
                </div>
            </div>

            <!-- 3. AI Solutions (Wide) -->
            <div class="bento-item wide glass-card service-card" data-aos="fade-up" data-aos-delay="200" data-tilt data-tilt-glare data-tilt-max-glare="0.3">
                <div class="service-icon"><i class="fas fa-brain"></i></div>
                <h3>AI Integration & Solutions</h3>
                <p>Implementing AI chatbots, automated content pipelines, and data-driven insights to streamline your business operations using OpenAI and Gemini APIs.</p>
            </div>

            <!-- 4. Server Specialist (Small) -->
            <div class="bento-item glass-card service-card" data-aos="fade-up" data-aos-delay="300" data-tilt data-tilt-glare data-tilt-max-glare="0.3">
                <div class="service-icon"><i class="fas fa-server"></i></div>
                <h3>Server Config</h3>
                <p>Linux VPS hardening, Nginx/Apache optimization, and aaPanel configuration.</p>
            </div>

            <!-- 5. Hosting (Small) -->
            <div class="bento-item glass-card service-card" data-aos="fade-up" data-aos-delay="400" data-tilt data-tilt-glare data-tilt-max-glare="0.3">
                <div class="service-icon"><i class="fas fa-cloud"></i></div>
                <h3>Web Hosting</h3>
                <p>Managed hosting solutions for high-performance enterprise applications.</p>
            </div>
        </div>
    </div>
</section>

<style>
.service-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px !important;
    cursor: pointer;
    border: 1px solid rgba(0, 212, 255, 0.1) !important;
}
.service-card h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: var(--accent-color);
}
.service-card .service-icon {
    font-size: 2.5rem;
    margin-bottom: 20px;
    transition: 0.3s;
}
.service-card:hover .service-icon {
    transform: scale(1.1) rotate(-10deg);
    color: #fff;
}
.service-tags {
    display: flex;
    gap: 10px;
    margin-top: 20px;
    font-size: 0.8rem;
    font-weight: 700;
    opacity: 0.6;
}
</style>
