<?php get_header(); ?>

<section class="archive-section" style="padding-top: 150px;">
    <div class="container">
        <div class="section-header" data-aos="fade-up">
            <h2 class="section-title">Latest <span class="cyan">Insights</span></h2>
            <div class="title-underline"></div>
        </div>

        <div class="blog-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
            <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                <div class="blog-item glass-card" data-aos="fade-up">
                    <div class="blog-thumb" style="margin-bottom: 20px;">
                        <?php if ( has_post_thumbnail() ) : the_post_thumbnail('large', array('style' => 'width:100%; border-radius:15px;')); endif; ?>
                    </div>
                    <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                    <p><?php echo wp_trim_words( get_the_excerpt(), 20 ); ?></p>
                    <a href="<?php the_permalink(); ?>" class="cyan" style="font-weight: 600;">Read More <i class="fas fa-arrow-right"></i></a>
                </div>
            <?php endwhile; endif; ?>
        </div>
    </div>
</section>

<?php get_footer(); ?>
