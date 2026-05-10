<?php get_header(); ?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    <section class="single-project-hero hero-section" style="height: 60vh;">
        <div id="particles-js"></div>
        <div class="container hero-container" data-aos="fade-up">
            <h1 class="hero-title"><?php the_title(); ?></h1>
            <div class="title-underline"></div>
        </div>
    </section>

    <section class="project-details">
        <div class="container">
            <div class="project-grid" style="display: grid; grid-template-columns: 2fr 1fr; gap: 50px;">
                <div class="project-content" data-aos="fade-right">
                    <div class="glass-card">
                        <?php if ( has_post_thumbnail() ) : ?>
                            <div class="project-main-img" style="margin-bottom: 30px;">
                                <?php the_post_thumbnail('full', array('style' => 'width:100%; border-radius:20px;')); ?>
                            </div>
                        <?php endif; ?>
                        <div class="entry-content">
                            <?php the_content(); ?>
                        </div>
                    </div>
                </div>

                <div class="project-sidebar" data-aos="fade-left">
                    <div class="glass-card" style="position: sticky; top: 120px;">
                        <h3>Project Info</h3>
                        <div class="info-list" style="margin-top: 20px;">
                            <div class="info-item" style="margin-bottom: 15px;">
                                <strong class="cyan">Client:</strong> <span>Confidential</span>
                            </div>
                            <div class="info-item" style="margin-bottom: 15px;">
                                <strong class="cyan">Category:</strong> <span><?php echo strip_tags( get_the_term_list( get_the_ID(), 'category', '', ', ' ) ); ?></span>
                            </div>
                            <div class="info-item" style="margin-bottom: 15px;">
                                <strong class="cyan">Date:</strong> <span><?php echo get_the_date(); ?></span>
                            </div>
                        </div>
                        <a href="#contact" class="btn btn-primary" style="width: 100%; text-align: center; margin-top: 20px;">Hire Me for Similar Work</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
<?php endwhile; endif; ?>

<?php get_footer(); ?>
