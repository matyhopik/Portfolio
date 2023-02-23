const header = document.querySelector('.primary-header');
const navigation = document.querySelector('.primary-navigation');
const navButton = document.querySelector('.nav-responsive__button');

navButton.addEventListener('click', () => {
    navigation.hasAttribute("data-visible")
    ? navButton.setAttribute("aria-expanded", false) 
    : navButton.setAttribute("aria-expanded", true);
    navigation.toggleAttribute("data-visible");
    header.toggleAttribute("data-overlay")
    navigation.classList.add('close');
});

const menuLinks = document.querySelectorAll('.primary-header nav ul li p');

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