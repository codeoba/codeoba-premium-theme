<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
    
    <!-- Open Graph Tags -->
    <meta property="og:title" content="Codeoba | Mohamed Nurdin Mgaza">
    <meta property="og:description" content="Senior Tech Professional - Website & Mobile App Development, AI Expert, Server Specialist.">
    <meta property="og:type" content="website">
    <meta property="og:image" content="<?php echo esc_url( get_theme_mod( 'profile_photo' ) ); ?>">

    <!-- Theme Version: 1.0.1 (Recursive Fix) -->
    <style>
        body { background-color: #0A0E1A !important; color: #FFFFFF !important; }
        #preloader { background-color: #0A0E1A !important; }
        .navbar { background: rgba(10, 14, 26, 0.8) !important; backdrop-filter: blur(10px); }
        .cyan { color: #00D4FF !important; }
    </style>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>

    <!-- Custom Cursor -->
    <div class="cursor-dot"></div>
    <div class="cursor-outline"></div>

    <!-- Preloader -->
    <div id="preloader">
        <div class="loader">
            <div class="circle"></div>
            <div class="text">CODEOBA</div>
        </div>
    </div>

    <!-- Navigation -->
    <nav class="navbar">
        <div class="container nav-container">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="logo">
                <span class="cyan">CODE</span>OBA
            </a>
            
            <div class="nav-links">
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#portfolio">Work</a>
                <a href="#contact" class="btn btn-outline">Let's Talk</a>
            </div>

            <div class="mobile-menu-toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <main id="main-content">
