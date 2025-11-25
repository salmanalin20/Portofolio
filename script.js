// ===================================
// GLASSMORPHISM PORTFOLIO - JAVASCRIPT
// Interactive Features with Theme & Language Support
// ===================================

// ===================================
// TYPING ANIMATION FOR HERO SUBTITLE
// ===================================

const typingText = document.getElementById('typingText');
const titles = [
    'Creative Developer & Designer',
    'UI/UX & Graphic Design',
    'Data Visualization',
    'Bioinformatics & Analysis',
    'Laboratory & Research',
    'Video Editing'
];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 60; // Faster typing speed

function typeEffect() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
        // Deleting text - faster
        typingText.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 30; // Faster deleting
    } else {
        // Typing text
        typingText.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 60; // Faster typing
    }

    // When word is complete
    if (!isDeleting && charIndex === currentTitle.length) {
        // Shorter pause at end
        typingSpeed = 1500; // Reduced from 2000ms
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        // Move to next word faster
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        typingSpeed = 300; // Faster transition
    }

    setTimeout(typeEffect, typingSpeed);
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    setTimeout(typeEffect, 800); // Start slightly faster
});

// ===================================
// NAVIGATION
// ===================================

const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// THEME TOGGLE (DARK/LIGHT MODE)
// ===================================

const themeToggle = document.getElementById('themeToggle');

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';

// Apply saved theme on page load
if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
    themeToggle.checked = true;
}

// Theme toggle event listener
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
        showNotification(getCurrentLang() === 'id' ? 'Mode Terang Diaktifkan ☀️' : 'Light Mode Activated ☀️', 'info');
    } else {
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
        showNotification(getCurrentLang() === 'id' ? 'Mode Gelap Diaktifkan 🌙' : 'Dark Mode Activated 🌙', 'info');
    }
});

// ===================================
// LANGUAGE SWITCHER (ID/EN)
// ===================================

const langToggle = document.getElementById('langToggle');
let currentLang = localStorage.getItem('language') || 'id';

// Function to get current language
function getCurrentLang() {
    return currentLang;
}

// Function to update all text elements
function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);

    // Update all elements with data-lang attributes
    const elements = document.querySelectorAll('[data-lang-id], [data-lang-en]');
    elements.forEach(element => {
        const text = element.getAttribute(`data-lang-${lang}`);
        if (text) {
            // Check if element is an input/textarea (update placeholder)
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                const placeholder = element.getAttribute(`data-lang-${lang}-placeholder`);
                if (placeholder) {
                    element.placeholder = placeholder;
                }
            } else if (element.classList.contains('btn-download')) {
                // Special handling for download button with icon
                const btnText = element.querySelector('.btn-text');
                if (btnText) {
                    btnText.textContent = text;
                }
            } else if (element.classList.contains('btn-whatsapp')) {
                // Special handling for WhatsApp button with icon
                const waText = element.querySelector('.wa-text');
                if (waText) {
                    waText.textContent = text;
                }
            } else if (element.classList.contains('btn-email')) {
                // Special handling for email button with icon
                const emailText = element.querySelector('.email-text');
                if (emailText) {
                    emailText.textContent = text;
                }
            } else if (element.classList.contains('btn-instagram')) {
                // Special handling for Instagram button with icon
                const igText = element.querySelector('.ig-text');
                if (igText) {
                    igText.textContent = text;
                }
            } else {
                element.textContent = text;
            }
        }
    });

    // Update language toggle button
    if (lang === 'id') {
        langToggle.innerHTML = '<span class="flag">🇮🇩</span><span class="lang-text">ID</span>';
    } else {
        langToggle.innerHTML = '<span class="flag">🇬🇧</span><span class="lang-text">EN</span>';
    }

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Language toggle event listener
langToggle.addEventListener('click', () => {
    const newLang = currentLang === 'id' ? 'en' : 'id';
    updateLanguage(newLang);
    showNotification(
        newLang === 'id' ? 'Bahasa diubah ke Indonesia 🇮🇩' : 'Language changed to English 🇬🇧',
        'info'
    );
});

// Apply saved language on page load
updateLanguage(currentLang);

// ===================================
// ENHANCED SCROLL REVEAL ANIMATIONS
// ===================================

// Select all elements with animation classes
const animatedElements = document.querySelectorAll('.reveal, .fade-up, .fade-left, .fade-right, .zoom-in, .rotate-in, .flip-in');

// Intersection Observer for better performance
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Optional: unobserve after animation to improve performance
            // revealObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animated elements
animatedElements.forEach(element => {
    revealObserver.observe(element);
});

// Fallback for browsers that don't support Intersection Observer
if (!('IntersectionObserver' in window)) {
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;

        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    };

    // Initial check
    revealOnScroll();

    // Check on scroll
    window.addEventListener('scroll', revealOnScroll);
}

// ===================================
// ANIMATED COUNTER FOR STATS
// ===================================

const statNumbers = document.querySelectorAll('.stat-number');
let hasAnimated = false;

const animateCounters = () => {
    if (hasAnimated) return;

    const statsSection = document.querySelector('.stats');
    if (!statsSection) return;

    const statsSectionTop = statsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (statsSectionTop < windowHeight - 100) {
        hasAnimated = true;

        statNumbers.forEach(stat => {
            const target = parseInt(stat.textContent);
            const increment = target / 50;
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    stat.textContent = Math.ceil(current) + '+';
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target + '+';
                }
            };

            updateCounter();
        });
    }
};

window.addEventListener('scroll', animateCounters);

// ===================================
// SKILL CARDS HOVER EFFECT
// ===================================

const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===================================
// PROJECT CARDS INTERACTION
// ===================================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    const links = card.querySelectorAll('.project-link');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const title = card.querySelector('h3').textContent;

            const message = currentLang === 'id'
                ? `Demo untuk "${title}" akan segera tersedia!`
                : `Demo for "${title}" coming soon!`;

            if (link.title.includes('Demo')) {
                showNotification(message);
            } else {
                const codeMessage = currentLang === 'id'
                    ? `Source code untuk "${title}" akan segera tersedia!`
                    : `Source code for "${title}" coming soon!`;
                showNotification(codeMessage);
            }
        });
    });
});

// ===================================
// CONTACT FORM HANDLING
// ===================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name && email && subject && message) {
        // Show success message
        const successMessage = currentLang === 'id'
            ? `Terima kasih ${name}! Pesan Anda telah dikirim. Saya akan segera menghubungi Anda.`
            : `Thank you ${name}! Your message has been sent. I will contact you soon.`;

        showNotification(successMessage, 'success');

        // Reset form
        contactForm.reset();

        // In a real application, you would send this data to a server
        console.log('Form Data:', { name, email, subject, message });
    } else {
        const errorMessage = currentLang === 'id'
            ? 'Mohon lengkapi semua field!'
            : 'Please fill in all fields!';
        showNotification(errorMessage, 'error');
    }
});

// ===================================
// DOWNLOAD CV BUTTON
// ===================================

const downloadCVBtn = document.getElementById('downloadCV');

downloadCVBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Show notification
    const message = currentLang === 'id'
        ? 'CV akan segera diunduh. Terima kasih! 📥'
        : 'CV will be downloaded soon. Thank you! 📥';

    showNotification(message, 'success');

    // In a real application, you would trigger actual CV download
    // Example: window.location.href = 'path/to/your-cv.pdf';
    console.log('Download CV clicked');
});


// ===================================
// NOTIFICATION SYSTEM
// ===================================

function showNotification(message, type = 'info') {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;

    // Check if in light mode
    const isLightMode = document.body.classList.contains('light-mode');
    const textColor = isLightMode ? '#1a1a2e' : 'white';

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 16px;
        padding: 1rem 1.5rem;
        color: ${textColor};
        font-weight: 500;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 350px;
    `;

    // Add color based on type
    if (type === 'success') {
        notification.style.borderLeft = '4px solid #43e97b';
    } else if (type === 'error') {
        notification.style.borderLeft = '4px solid #f5576c';
    } else {
        notification.style.borderLeft = '4px solid #4facfe';
    }

    // Add to document
    document.body.appendChild(notification);

    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// Add notification animations to the page
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===================================
// PARALLAX EFFECT FOR HERO
// ===================================

const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - scrolled / 700;
    }
});

// ===================================
// LAZY LOADING FOR IMAGES
// ===================================

const images = document.querySelectorAll('img');

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.5s ease';

            // Simulate loading
            setTimeout(() => {
                img.style.opacity = '1';
            }, 100);

            observer.unobserve(img);
        }
    });
}, {
    threshold: 0.1
});

images.forEach(img => {
    imageObserver.observe(img);
});

// ===================================
// ACTIVE NAVIGATION LINK HIGHLIGHT
// ===================================

const sections = document.querySelectorAll('section');

const highlightNavigation = () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
};

window.addEventListener('scroll', highlightNavigation);

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================

// Debounce function for scroll events
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

// Apply debounce to scroll-heavy functions
const debouncedHighlight = debounce(highlightNavigation, 50);

window.addEventListener('scroll', debouncedHighlight);

// ===================================
// INITIALIZATION
// ===================================

console.log('%c🚀 Portfolio Website Loaded Successfully!', 'color: #667eea; font-size: 16px; font-weight: bold;');
console.log('%cDesigned with ❤️ using Glassmorphism', 'color: #4facfe; font-size: 12px;');
console.log(`%cCurrent Language: ${currentLang.toUpperCase()} | Theme: ${currentTheme}`, 'color: #43e97b; font-size: 12px;');

// Add active class to nav links
const activeNavStyle = document.createElement('style');
activeNavStyle.textContent = `
    .nav-link.active {
        background: rgba(102, 126, 234, 0.2);
        color: #fff;
    }
`;
document.head.appendChild(activeNavStyle);
