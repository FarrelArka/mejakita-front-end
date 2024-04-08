document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            if (this.style.color !== 'rgb(240, 48, 102)') {
                this.style.color = '#F03066';
            } else {
                this.style.color = '';
            }
        });
    });
});
