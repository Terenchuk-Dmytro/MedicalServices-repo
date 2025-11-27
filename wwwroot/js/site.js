(() => {
    const nav = document.querySelector('[data-nav]');
    const header = document.querySelector('[data-header]');
    const toggle = document.querySelector('[data-menu-toggle]');

    if (toggle && nav) {
        const toggleMenu = () => {
            const isOpen = nav.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', String(isOpen));
        };

        toggle.addEventListener('click', toggleMenu);
        document.addEventListener('click', (event) => {
            if (!header.contains(event.target)) {
                nav.classList.remove('is-open');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    const revealItems = document.querySelectorAll('.card, .flow-card');
    if (revealItems.length) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        revealItems.forEach((item) => observer.observe(item));
    }
})();
