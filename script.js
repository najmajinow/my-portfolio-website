// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Progress Bar on Scroll
window.onscroll = function() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
};

// Modal for Project Details
function openModal(projectId) {
    var modal = document.getElementById("modal");
    var title = document.getElementById("modal-title");
    var description = document.getElementById("modal-description");

    if (projectId === 'project1') {
        title.innerText = "Project 1";
        description.innerText = "Detailed description of Project 1.";
    } else if (projectId === 'project2') {
        title.innerText = "Project 2";
        description.innerText = "Detailed description of Project 2.";
    }

    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Close Modal when clicking outside of it
window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
