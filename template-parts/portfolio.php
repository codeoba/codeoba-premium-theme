<section id="portfolio" class="portfolio-section">
    <div class="container">
        <div class="section-header" data-aos="fade-up">
            <h2 class="section-title">Selected <span class="cyan">Works</span></h2>
            <div class="title-underline"></div>
        </div>

        <div class="portfolio-filter" data-aos="fade-up">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="web">Web</button>
            <button class="filter-btn" data-filter="mobile">Mobile</button>
            <button class="filter-btn" data-filter="ai">AI</button>
        </div>

        <div class="portfolio-grid" data-aos="fade-up">
            <!-- Project 1: Web -->
            <div class="portfolio-item glass-card web">
                <div class="portfolio-thumb">
                    <img src="https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=600&auto=format&fit=crop" alt="Duka Bora">
                    <div class="portfolio-overlay">
                        <a href="#" class="view-btn"><i class="fas fa-link"></i></a>
                    </div>
                </div>
                <div class="portfolio-info">
                    <div class="portfolio-category">Web Development</div>
                    <h3>Duka Bora — E-commerce + M-Pesa</h3>
                    <p>Premium online store featuring seamless M-Pesa integration for instant payments in Tanzania.</p>
                    <div class="tech-stack">
                        <span class="badge">WordPress</span>
                        <span class="badge">WooCommerce</span>
                        <span class="badge">M-Pesa API</span>
                    </div>
                </div>
            </div>

            <!-- Project 2: Mobile -->
            <div class="portfolio-item glass-card mobile">
                <div class="portfolio-thumb">
                    <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop" alt="SafariTrack">
                    <div class="portfolio-overlay">
                        <a href="#" class="view-btn"><i class="fas fa-link"></i></a>
                    </div>
                </div>
                <div class="portfolio-info">
                    <div class="portfolio-category">Mobile App</div>
                    <h3>SafariTrack — Fleet Management</h3>
                    <p>Real-time vehicle tracking and route optimization app designed for logistics businesses.</p>
                    <div class="tech-stack">
                        <span class="badge">Flutter</span>
                        <span class="badge">Firebase</span>
                        <span class="badge">Google Maps</span>
                    </div>
                </div>
            </div>

            <!-- Project 3: AI -->
            <div class="portfolio-item glass-card ai">
                <div class="portfolio-thumb">
                    <img src="https://images.unsplash.com/photo-1531746790731-6c087fecd05a?q=80&w=600&auto=format&fit=crop" alt="AI ChatBot">
                    <div class="portfolio-overlay">
                        <a href="#" class="view-btn"><i class="fas fa-link"></i></a>
                    </div>
                </div>
                <div class="portfolio-info">
                    <div class="portfolio-category">Artificial Intelligence</div>
                    <h3>AI ChatBot — Bank Support</h3>
                    <p>Intelligent customer support bot automating 70% of common banking inquiries with 99% accuracy.</p>
                    <div class="tech-stack">
                        <span class="badge">Python</span>
                        <span class="badge">OpenAI API</span>
                        <span class="badge">Linux VPS</span>
                    </div>
                </div>
            </div>

            <?php
            // Keep dynamic loop for future additions
            $args = array('post_type' => 'project', 'posts_per_page' => 3, 'offset' => 0);
            $query = new WP_Query( $args );
            if ( $query->have_posts() ) :
                while ( $query->have_posts() ) : $query->the_post();
                    // Optional: output dynamic items here
                endwhile;
                wp_reset_postdata();
            endif;
            ?>
        </div>
    </div>
</section>

<style>
.portfolio-category { font-size: 0.8rem; color: var(--accent-color); font-weight: 700; text-transform: uppercase; margin-bottom: 5px; }
.tech-stack { margin-top: 15px; display: flex; flex-wrap: wrap; gap: 8px; }
.badge { background: rgba(0, 212, 255, 0.1); border: 1px solid var(--accent-color); padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; color: var(--accent-color); font-weight: 600; }
</style>
