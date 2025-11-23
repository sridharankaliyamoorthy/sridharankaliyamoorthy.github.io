// Main JavaScript for GitHub Pages Personal Website
// Mr. Robot Boot Menu Style with Binary Rain

// Binary Rain Effect
function createBinaryRain() {
    const binaryRain = document.getElementById('binaryRain');
    if (!binaryRain) return;
    
    const chars = ['0', '1', 'T'];
    const columns = Math.floor(window.innerWidth / 20);
    
    for (let i = 0; i < columns; i++) {
        const char = document.createElement('div');
        char.className = 'binary-char';
        char.textContent = chars[Math.floor(Math.random() * chars.length)];
        char.style.left = `${i * 20}px`;
        char.style.animationDuration = `${3 + Math.random() * 4}s`;
        char.style.animationDelay = `${Math.random() * 2}s`;
        binaryRain.appendChild(char);
    }
    
    // Continuously add more characters
    setInterval(() => {
        const char = document.createElement('div');
        char.className = 'binary-char';
        char.textContent = chars[Math.floor(Math.random() * chars.length)];
        char.style.left = `${Math.random() * window.innerWidth}px`;
        char.style.animationDuration = `${3 + Math.random() * 4}s`;
        binaryRain.appendChild(char);
        
        // Remove old characters
        if (binaryRain.children.length > 100) {
            binaryRain.removeChild(binaryRain.firstChild);
        }
    }, 200);
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize binary rain
    createBinaryRain();
    // Smooth scrolling for anchor links
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

    // Fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    document.querySelectorAll('.card, .project-card, .skill-item').forEach(el => {
        observer.observe(el);
    });

    // Contact form handling (mailto: fallback)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Create mailto link
            const subject = encodeURIComponent(`Contact from ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
            const mailtoLink = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
            
            window.location.href = mailtoLink;
        });
    }

    // Add active state to navigation links
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.style.fontWeight = '700';
            link.style.color = 'var(--accent-color)';
        }
    });
});

