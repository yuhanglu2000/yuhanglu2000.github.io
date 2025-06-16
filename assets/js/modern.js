// Modern Academic Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    initNavigation();
    
    // Scroll animations
    initScrollAnimations();
    
    // Smooth scrolling for navigation links
    initSmoothScrolling();
    
    // Mobile navigation toggle
    initMobileNav();
    
    // Typing animation for hero section
    initTypingAnimation();
    
    // Intersection Observer for animations
    initIntersectionObserver();
});

// Navigation show/hide on scroll
function initNavigation() {
    const nav = document.getElementById('modernNav');
    const heroSection = document.querySelector('.hero-section');
    let lastScrollTop = 0;
    let isNavVisible = false;
    
    if (!nav || !heroSection) return;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        const heroBottom = heroSection.offsetHeight;
        
        // Show nav after hero section
        if (currentScroll > heroBottom) {
            if (!isNavVisible) {
                nav.classList.add('visible');
                isNavVisible = true;
            }
            
            // Hide nav on scroll down, show on scroll up
            if (currentScroll > lastScrollTop + 5) {
                nav.style.transform = 'translateY(-100%)';
            } else if (currentScroll < lastScrollTop - 5) {
                nav.style.transform = 'translateY(0)';
            }
        } else {
            nav.classList.remove('visible');
            isNavVisible = false;
        }
        
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
}

// Scroll animations
function initScrollAnimations() {
    // Add scroll indicator animation
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const heroSection = document.querySelector('.hero-section');
            if (heroSection) {
                window.scrollTo({
                    top: heroSection.offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Parallax effect for hero background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const navHeight = document.getElementById('modernNav').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                updateActiveNavLink(this);
            }
        });
    });
}

// Update active navigation link
function updateActiveNavLink(activeLink) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
}

// Mobile navigation toggle
function initMobileNav() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
}

// Typing animation for hero section
function initTypingAnimation() {
    const profileTitle = document.querySelector('.profile-title');
    if (!profileTitle) return;
    
    const originalText = profileTitle.textContent;
    const typingSpeed = 50; // milliseconds per character
    const deletingSpeed = 30;
    const pauseTime = 2000;
    
    let currentText = '';
    let isDeleting = false;
    let charIndex = 0;
    
    function typeWriter() {
        if (isDeleting) {
            currentText = originalText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            currentText = originalText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        profileTitle.textContent = currentText;
        
        let typeSpeed = isDeleting ? deletingSpeed : typingSpeed;
        
        if (!isDeleting && charIndex === originalText.length) {
            typeSpeed = pauseTime;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            typeSpeed = 500;
        }
        
        setTimeout(typeWriter, typeSpeed);
    }
    
    // Start typing animation after a short delay
    setTimeout(typeWriter, 1000);
}

// Intersection Observer for fade-in animations
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all elements with fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        observer.observe(element);
    });
    
    // Observe paper cards for staggered animation
    const paperCards = document.querySelectorAll('.paper-card');
    paperCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Observe timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
        observer.observe(item);
    });
}

// Utility function to debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Enhanced paper card interactions
function initPaperCardInteractions() {
    const paperCards = document.querySelectorAll('.paper-card');
    
    paperCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Initialize enhanced interactions
document.addEventListener('DOMContentLoaded', function() {
    initPaperCardInteractions();
});

// Add custom cursor effect
function initCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    const cursorInner = document.createElement('div');
    cursorInner.className = 'custom-cursor-inner';
    cursor.appendChild(cursorInner);
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateCursor() {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;
        
        cursorX += dx * 0.1;
        cursorY += dy * 0.1;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
    
    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .paper-card, .social-link');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            cursor.classList.add('cursor-hover');
        });
        
        element.addEventListener('mouseleave', function() {
            cursor.classList.remove('cursor-hover');
        });
    });
}

// Progressive loading for images
function initProgressiveImageLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// Initialize all enhanced features
document.addEventListener('DOMContentLoaded', function() {
    initProgressiveImageLoading();
    
    // Custom cursor disabled - user preference
    // if (window.innerWidth > 768) {
    //     initCustomCursor();
    // }
}); 