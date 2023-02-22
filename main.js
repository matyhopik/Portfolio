const header = document.querySelector('.primary-header');
const navigation = document.querySelector('.primary-navigation');
const navButton = document.querySelector('.nav-responsive__button');

navButton.addEventListener('click', () => {
    navigation.hasAttribute("data-visible") 
    ? navButton.setAttribute("aria-expanded", false) 
    : navButton.setAttribute("aria-expanded", true);
    navigation.toggleAttribute("data-visible");
    header.toggleAttribute("data-overlay")
});