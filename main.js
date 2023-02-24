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

const menuLinks = document.querySelectorAll('.nav ul li p');

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

const sideSocials = document.querySelector('.main-socials');
const sideMail = document.querySelector('.main-email');

const footerHeight = document.querySelector('.primary-footer').offsetHeight;
var visited = false;
var loaded = false;

if (scrollY == 0) {
    sideSocials.setAttribute("data-visible", "");
    sideMail.setAttribute("data-visible", "");
}

window.addEventListener('scroll', function() {

    if (window.scrollY > 500) {
        if (navigation.hasAttribute("data-visible")) {
            navButton.setAttribute("aria-expanded", false);
            navigation.toggleAttribute("data-visible");
            header.toggleAttribute("data-overlay");
        }
    }

    if (window.scrollY + window.innerHeight > document.body.offsetHeight - footerHeight) {
        if (loaded == true) {
            sideSocials.setAttribute("data-visible", "false");
            sideMail.setAttribute("data-visible", "false");
        }
        loaded = false;
        visited = true;
    } else if (window.scrollY + window.innerHeight < document.body.offsetHeight - footerHeight) {
        sideSocials.setAttribute("data-visible", "");
        sideMail.setAttribute("data-visible", "");
        if (visited == true) {
            sideSocials.setAttribute("data-visible", "visited");
            sideMail.setAttribute("data-visible", "visited");
        }
        loaded = true;
    }
    console.log(loaded)
    console.log(visited)
  });
