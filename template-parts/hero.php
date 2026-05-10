<section id="hero" class="hero-section">
    <div id="particles-js"></div>
    <div class="container hero-container">
        <div class="hero-content" data-aos="fade-up">
            <div class="profile-frame-wrapper">
                <div class="profile-glow"></div>
                <div class="profile-frame">
                    <?php 
                    $profile_img = get_theme_mod( 'profile_photo' );
                    if ( $profile_img ) : ?>
                        <img src="<?php echo esc_url( $profile_img ); ?>" alt="Mohamed Nurdin Mgaza">
                    <?php else : ?>
                        <div class="initials">MNM</div>
                    <?php endif; ?>
                </div>
            </div>

            <h1 class="hero-title">
                Hi, I'm <span class="cyan">Mohamed Nurdin Mgaza</span>
            </h1>
            <div class="typewriter-container">
                <span id="typewriter"></span>
            </div>
            <p class="hero-subtitle">
                Expert in crafting high-performance digital solutions with over 5 years of professional experience.
            </p>
            <div class="hero-btns">
                <a href="#portfolio" class="btn btn-primary">View My Work</a>
                <a href="#contact" class="btn btn-outline">Let's Talk</a>
            </div>
        </div>
    </div>
</section>
