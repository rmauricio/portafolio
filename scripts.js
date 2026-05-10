// ========================================
// FUNCIONALIDADES DEL PORTAFOLIO
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // 2. Mobile menu toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = navToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }
    
    // 3. Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = navToggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });
    
    // 4. Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
    
    // 5. Animación de aparición al hacer scroll (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Aplicar animación a elementos clave
    document.querySelectorAll('.project-card, .blog-card, .stat-card, .tools-category').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
    
    // 6. Preload de imágenes críticas
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
    
    // 7. Console info para desarrolladores/recruiters técnicos
    console.log('%c📡 Mauricio Cabrera - RF Optimization Portfolio', 'color: #0D8ABC; font-size: 16px; font-weight: bold;');
    console.log('%c🔧 Stack: HTML5, CSS3, JavaScript (Vanilla), Responsive Design', 'color: #666;');
    console.log('%c💼 Open to: RF Leadership Roles | Optimization Manager | Technical Lead', 'color: #1abc9c;');
    console.log('%c📧 Contact: r.mauricio.cabrera@gmail.com', 'color: #e67e22;');
});

// ========================================
// CHART DE HABILIDADES (si existe en skills.html)
// ========================================
function initSkillsChart() {
    const ctx = document.getElementById('skillsChart');
    if (ctx && typeof Chart !== 'undefined') {
        new Chart(ctx.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ['Optimización RF', 'Python', 'Tableau', 'Power BI', 'Liderazgo','AI'],
                datasets: [{
                    label: 'Nivel de Competencia',
                    data: [95, 90, 85, 50, 70,45],
                    backgroundColor: [
                        '#0D8ABC',
                        '#1abc9c', 
                        '#e67e22', 
                        '#9b59b6',
                        '#3498db',
                        '#34495e',
                    ],
                    borderWidth: 0,
                    hoverOffset: 10
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            font: {
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.parsed}%`;
                            }
                        }
                    }
                },
                cutout: '70%'
            }
        });
    }
}

// Inicializar chart si estamos en la página de habilidades
if (window.location.pathname.includes('skills.html')) {
    // Esperar a que Chart.js esté cargado
    if (typeof Chart !== 'undefined') {
        initSkillsChart();
    } else {
        document.addEventListener('DOMContentLoaded', initSkillsChart);
    }
}
