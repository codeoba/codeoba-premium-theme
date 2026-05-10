<?php
/**
 * Codeoba Premium functions and definitions
 */

if ( ! function_exists( 'codeoba_setup' ) ) :
    function codeoba_setup() {
        add_theme_support( 'title-tag' );
        add_theme_support( 'post-thumbnails' );
        add_theme_support( 'customize-selective-refresh-widgets' );
        add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );
    }
endif;
add_action( 'after_setup_theme', 'codeoba_setup' );

/**
 * Enqueue scripts and styles.
 */
function codeoba_scripts() {
    wp_enqueue_style( 'codeoba-style', get_stylesheet_uri(), array(), '1.0.0' );
    wp_enqueue_style( 'codeoba-main', get_template_directory_uri() . '/assets/css/main.css', array(), '1.0.0' );
    
    // External Libraries
    wp_enqueue_style( 'aos', 'https://unpkg.com/aos@next/dist/aos.css' );
    wp_enqueue_style( 'font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' );

    wp_enqueue_script( 'aos-js', 'https://unpkg.com/aos@next/dist/aos.js', array(), null, true );
    wp_enqueue_script( 'particles-js', 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js', array(), null, true );
    wp_enqueue_script( 'typewriter-js', 'https://unpkg.com/typewriter-effect@latest/dist/core.js', array(), null, true );
    wp_enqueue_script( 'codeoba-main-js', get_template_directory_uri() . '/assets/js/main.js', array('aos-js', 'particles-js', 'typewriter-js'), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'codeoba_scripts' );

/**
 * Register Custom Post Types
 */
function codeoba_register_cpts() {
    // Projects
    register_post_type( 'project', array(
        'labels' => array( 'name' => __( 'Projects' ), 'singular_name' => __( 'Project' ) ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-portfolio',
        'supports' => array( 'title', 'editor', 'thumbnail', 'excerpt' ),
        'show_in_rest' => true,
    ));

    // Services
    register_post_type( 'service', array(
        'labels' => array( 'name' => __( 'Services' ), 'singular_name' => __( 'Service' ) ),
        'public' => true,
        'menu_icon' => 'dashicons-hammer',
        'supports' => array( 'title', 'editor', 'thumbnail' ),
        'show_in_rest' => true,
    ));

    // Testimonials
    register_post_type( 'testimonial', array(
        'labels' => array( 'name' => __( 'Testimonials' ), 'singular_name' => __( 'Testimonial' ) ),
        'public' => true,
        'menu_icon' => 'dashicons-testimonial',
        'supports' => array( 'title', 'editor', 'thumbnail' ),
        'show_in_rest' => true,
    ));
}
add_action( 'init', 'codeoba_register_cpts' );

/**
 * Customizer Settings
 */
function codeoba_customize_register( $wp_customize ) {
    // Identity Section
    $wp_customize->add_section( 'codeoba_identity', array(
        'title'    => __( 'Codeoba Identity', 'codeoba-premium' ),
        'priority' => 30,
    ));

    $wp_customize->add_setting( 'profile_photo', array(
        'default'   => '',
        'transport' => 'refresh',
    ));

    $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'profile_photo', array(
        'label'    => __( 'Upload Your Profile Photo', 'codeoba-premium' ),
        'section'  => 'codeoba_identity',
        'settings' => 'profile_photo',
    )));

    // WhatsApp Setting
    $wp_customize->add_setting( 'whatsapp_number', array(
        'default'   => '+255794625529',
        'transport' => 'refresh',
    ));

    $wp_customize->add_control( 'whatsapp_number', array(
        'label'    => __( 'WhatsApp Number', 'codeoba-premium' ),
        'section'  => 'codeoba_identity',
        'type'     => 'text',
    ));
}
add_action( 'customize_register', 'codeoba_customize_register' );

/**
 * Schema.org Person Markup
 */
function codeoba_schema_person() {
    ?>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org/",
      "@type": "Person",
      "name": "Mohamed Nurdin Mgaza",
      "url": "<?php echo esc_url( home_url( '/' ) ); ?>",
      "image": "<?php echo esc_url( get_theme_mod( 'profile_photo' ) ); ?>",
      "jobTitle": "Senior Tech Professional",
      "email": "codeoba@gmail.com",
      "telephone": "+255794625529",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dar es Salaam",
        "addressCountry": "Tanzania"
      },
      "sameAs": [
        "https://wa.me/255794625529"
      ]
    }
    </script>
    <?php
}
add_action( 'wp_head', 'codeoba_schema_person' );
