// Navbar scroll effect
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update active nav link based on scroll position
    updateActiveNavLink();
});

// Update active navigation link based on current section
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

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

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.timeline-item, .project-card, .publication-item, .skill-category, .contact-item, .info-card'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Initialize active nav link
    updateActiveNavLink();
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.getElementById('hero');
    const scrollPosition = window.scrollY;
    hero.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    hero.style.opacity = 1 - (scrollPosition / 800);
});

// Add hover effect to timeline items
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const marker = item.querySelector('.timeline-marker');
        marker.style.transform = 'scale(1.3)';
        marker.style.transition = 'transform 0.3s ease';
    });

    item.addEventListener('mouseleave', () => {
        const marker = item.querySelector('.timeline-marker');
        marker.style.transform = 'scale(1)';
    });
});

// Copy email to clipboard functionality
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
emailLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const email = link.textContent;
        if (navigator.clipboard) {
            e.preventDefault();
            navigator.clipboard.writeText(email).then(() => {
                // Create a temporary tooltip
                const tooltip = document.createElement('span');
                tooltip.textContent = 'Email copied!';
                tooltip.style.cssText = `
                    position: absolute;
                    background: #10b981;
                    color: white;
                    padding: 0.5rem 1rem;
                    border-radius: 6px;
                    font-size: 0.875rem;
                    font-weight: 600;
                    z-index: 1000;
                    pointer-events: none;
                    animation: fadeIn 0.3s ease;
                `;

                const rect = link.getBoundingClientRect();
                tooltip.style.left = `${rect.left}px`;
                tooltip.style.top = `${rect.bottom + 10}px`;

                document.body.appendChild(tooltip);

                setTimeout(() => {
                    tooltip.style.animation = 'fadeOut 0.3s ease';
                    setTimeout(() => tooltip.remove(), 300);
                }, 2000);
            });
        }
    });
});

// Add CSS for tooltip animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-10px); }
    }
`;
document.head.appendChild(style);

// Mobile menu toggle (for future implementation)
const createMobileMenu = () => {
    const navContainer = document.querySelector('.nav-container');
    const navMenu = document.querySelector('.nav-menu');

    if (window.innerWidth <= 768) {
        if (!document.querySelector('.mobile-menu-toggle')) {
            const menuToggle = document.createElement('button');
            menuToggle.className = 'mobile-menu-toggle';
            menuToggle.innerHTML = '☰';
            menuToggle.style.cssText = `
                display: block;
                background: none;
                border: none;
                font-size: 1.5rem;
                color: var(--primary-color);
                cursor: pointer;
            `;

            menuToggle.addEventListener('click', () => {
                navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '100%';
                navMenu.style.left = '0';
                navMenu.style.right = '0';
                navMenu.style.background = 'white';
                navMenu.style.padding = '1rem';
                navMenu.style.boxShadow = 'var(--shadow-md)';
            });

            navContainer.appendChild(menuToggle);
        }
    }
};

window.addEventListener('resize', createMobileMenu);
createMobileMenu();

// Performance optimization: Debounce scroll events
let scrollTimeout;
const debounceScroll = (callback, delay = 10) => {
    return () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(callback, delay);
    };
};

// Apply debouncing to scroll-heavy operations
window.addEventListener('scroll', debounceScroll(() => {
    updateActiveNavLink();
}));

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
});

// Set initial body opacity
document.body.style.opacity = '0';
