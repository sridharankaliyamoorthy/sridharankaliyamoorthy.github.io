// Main JavaScript for GitHub Pages Personal Website
// Mr. Robot Boot Menu Style with Binary Rain

// Matrix Binary Rain Effect
function createBinaryRain() {
    const binaryRain = document.getElementById('binaryRain');
    if (!binaryRain) return;
    
    const chars = ['0', '1'];
    const columns = Math.floor(window.innerWidth / 20);
    
    // Create multiple columns of falling binary
    for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.className = 'binary-column';
        column.style.left = `${i * 20}px`;
        column.style.animationDuration = `${2 + Math.random() * 3}s`;
        column.style.animationDelay = `${Math.random() * 2}s`;
        
        // Add multiple characters in each column
        for (let j = 0; j < 20; j++) {
            const char = document.createElement('div');
            char.className = 'binary-char';
            char.textContent = chars[Math.floor(Math.random() * chars.length)];
            char.style.top = `${j * 25}px`;
            char.style.opacity = `${0.7 + Math.random() * 0.3}`;
            column.appendChild(char);
        }
        
        binaryRain.appendChild(column);
    }
    
    // Continuously add more characters
    setInterval(() => {
        const char = document.createElement('div');
        char.className = 'binary-char';
        char.textContent = chars[Math.floor(Math.random() * chars.length)];
        char.style.left = `${Math.random() * window.innerWidth}px`;
        char.style.animationDuration = `${2 + Math.random() * 3}s`;
        char.style.opacity = `${0.7 + Math.random() * 0.3}`;
        binaryRain.appendChild(char);
        
        // Remove old characters
        if (binaryRain.children.length > 200) {
            binaryRain.removeChild(binaryRain.firstChild);
        }
    }, 100);
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

