document.addEventListener('DOMContentLoaded', () => {


    // 2. Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinksContainer = document.querySelector('.nav-links');
    
    // Create mobile nav overlay
    const mobileNav = document.createElement('div');
    mobileNav.classList.add('mobile-nav');
    
    const mobileNavLinks = document.createElement('ul');
    mobileNavLinks.classList.add('mobile-nav-links');
    mobileNavLinks.innerHTML = navLinksContainer.innerHTML;
    
    mobileNav.appendChild(mobileNavLinks);
    document.body.appendChild(mobileNav);

    // Toggle menu
    mobileMenuBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('open');
        const icon = mobileMenuBtn.querySelector('i');
        if (mobileNav.classList.contains('open')) {
            icon.classList.replace('fa-bars', 'fa-times');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
            document.body.style.overflow = '';
        }
    });

    // Close mobile menu when clicking a link
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('open');
            mobileMenuBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
            document.body.style.overflow = '';
        });
    });

    // 3. Active Navigation Link on Scroll
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Adjust the offset for the sticky header
            if (scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // 4. Smooth Scrolling for anchor links (fallback for browsers that don't support scroll-behavior: smooth in CSS)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                const headerOffset = 70; // Height of the fixed header
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
                window.scrollTo({
                     top: offsetPosition,
                     behavior: "smooth"
                });
            }
        });
    });
});
