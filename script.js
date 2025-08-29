// Tab functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Add click event listeners to tab links
    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all tabs and contents
            tabLinks.forEach(tab => tab.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Show corresponding content
            const targetTab = this.getAttribute('data-tab');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
            
            // Smooth scroll to top of content
            document.querySelector('.main-content').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
    
    // Handle URL hash changes for direct linking to tabs
    window.addEventListener('hashchange', function() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            const targetTab = document.querySelector(`[data-tab="${hash}"]`);
            if (targetTab) {
                targetTab.click();
            }
        }
    });
    
    // Set initial tab based on URL hash
    const initialHash = window.location.hash.substring(1);
    if (initialHash) {
        const initialTab = document.querySelector(`[data-tab="${initialHash}"]`);
        if (initialTab) {
            // Remove active from default tab
            document.querySelector('.tab-link.active').classList.remove('active');
            document.querySelector('.tab-content.active').classList.remove('active');
            
            // Set active to hash tab
            initialTab.classList.add('active');
            document.getElementById(initialHash).classList.add('active');
        }
    }
    
    // Add smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add animation on scroll for cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards for animation
    document.querySelectorAll('.overview-card, .requirement-box, .resource-item').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Add hover effects for interactive elements
    document.querySelectorAll('.resource-link, .sector-tag').forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add click tracking for analytics (optional)
    document.querySelectorAll('.tab-link').forEach(link => {
        link.addEventListener('click', function() {
            // You can add analytics tracking here
            console.log(`Tab clicked: ${this.getAttribute('data-tab')}`);
        });
    });
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.altKey) {
            const currentActiveIndex = Array.from(tabLinks).findIndex(link => 
                link.classList.contains('active')
            );
            
            let newIndex = currentActiveIndex;
            
            switch(e.key) {
                case 'ArrowLeft':
                    newIndex = currentActiveIndex > 0 ? currentActiveIndex - 1 : tabLinks.length - 1;
                    break;
                case 'ArrowRight':
                    newIndex = currentActiveIndex < tabLinks.length - 1 ? currentActiveIndex + 1 : 0;
                    break;
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                    newIndex = parseInt(e.key) - 1;
                    break;
            }
            
            if (newIndex !== currentActiveIndex && newIndex >= 0 && newIndex < tabLinks.length) {
                tabLinks[newIndex].click();
            }
        }
    });
    
    // Add print styles support
    window.addEventListener('beforeprint', function() {
        // Show all tab contents when printing
        tabContents.forEach(content => {
            content.style.display = 'block';
        });
    });
    
    window.addEventListener('afterprint', function() {
        // Restore normal tab behavior after printing
        tabContents.forEach(content => {
            content.style.display = '';
        });
    });
});