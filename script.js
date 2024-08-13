// Smooth Scrolling
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal Functionality
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', function () {
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('show');
        }
    });
});

document.querySelectorAll('.close-btn').forEach(button => {
    button.addEventListener('click', function () {
        const modalId = this.getAttribute('data-close');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('show');
        }
    });
});

// Dynamic Progress Bar
window.addEventListener('scroll', () => {
    const progressBar = document.getElementById('progress-bar');
    const scrollPosition = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / docHeight) * 100;
    progressBar.style.width = `${scrollPercentage}%`;
});
