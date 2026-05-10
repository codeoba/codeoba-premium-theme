<?php get_header(); ?>

<section class="error-404 hero-section">
    <div id="particles-js"></div>
    <div class="container hero-container" data-aos="zoom-in">
        <h1 class="cyan" style="font-size: 8rem; margin-bottom: 0;">404</h1>
        <h2>System Error: Page Not Found</h2>
        <p class="hero-subtitle">The requested module is either missing or has been moved to a different sector. Please return to base.</p>
        <div class="hero-btns">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="btn btn-primary">Return to Base</a>
        </div>
    </div>
</section>

<?php get_footer(); ?>
