const header = document.querySelector('.primary-header'),
      navigation = document.querySelector('.primary-navigation'),
      navButton = document.querySelector('.nav-responsive__button');

/* Open and close navbar */
navButton.addEventListener('click', () => {
    navigation.hasAttribute("data-visible")
    ? navButton.setAttribute("aria-expanded", false) 
    : navButton.setAttribute("aria-expanded", true);
    navigation.toggleAttribute("data-visible");
    header.toggleAttribute("data-overlay")
    navigation.classList.add('close');
});

const menuLinks = document.querySelectorAll('.nav ul li p, .primary-header .container p, .primary-footer .container p');

/* Link anchors for header and footer */
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        const section = document.querySelector('.' + link.getAttribute('data-section'));
        section.scrollIntoView({ behavior: 'smooth' });

        if (navigation.hasAttribute("data-visible")) {
            navButton.setAttribute("aria-expanded", false);
            navigation.toggleAttribute("data-visible");
            header.toggleAttribute("data-overlay");
        }
    });
});