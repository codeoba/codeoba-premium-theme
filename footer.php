    </main>

    <footer class="site-footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col footer-left">
                    <h3 class="logo"><span class="cyan">CODE</span>OBA</h3>
                    <p>Turning complex ideas into digital reality. Senior tech professional based in Dar es Salaam, Tanzania.</p>
                </div>
                <div class="footer-col footer-center">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">My Work</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-col footer-right">
                    <h4>Connect</h4>
                    <p><i class="fas fa-envelope cyan"></i> codeoba@gmail.com</p>
                    <p><i class="fas fa-phone cyan"></i> +255 794 625 529</p>
                    <div class="social-icons" style="margin-top: 15px;">
                        <a href="https://github.com/codeoba" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                        <a href="https://linkedin.com/in/codeoba" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                        <a href="https://twitter.com/codeoba" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; <?php echo date('Y'); ?> Codeoba. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <!-- Back to Top -->
    <div id="back-to-top">
        <svg class="progress-circle" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
        <i class="fas fa-arrow-up"></i>
    </div>

    <!-- WhatsApp Floating Button -->
    <a href="https://wa.me/<?php echo str_replace('+', '', get_theme_mod('whatsapp_number', '255794625529')); ?>" class="whatsapp-float" target="_blank">
        <i class="fab fa-whatsapp"></i>
        <span class="tooltip">Chat with me</span>
    </a>

    <?php wp_footer(); ?>
</body>
</html>
