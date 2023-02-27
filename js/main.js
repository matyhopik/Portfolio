const blob = document.querySelector('.blob');

document.addEventListener("mousemove", function(event) {
    blob.animate({
        left: event.clientX + "px",
        top: event.clientY + "px"
    }, { duration: 2000, fill: "forwards" });
  });

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

const menuLinks = document.querySelectorAll('.nav ul li p, .primary-header .container p, .primary-footer .container p');

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

const scrollToTopButton = document.querySelector('.return-to-top');
const enableButton = document.querySelector('.about').offsetTop - (document.querySelector('.about').offsetHeight / 2);
var scrolledToThePoint = false;
var loudedThePoint = false;

var clicked = false;

if (scrollY == 0) {
    sideSocials.setAttribute("data-visible", "");
    sideMail.setAttribute("data-visible", "");
    scrollToTopButton.setAttribute("data-visible", "");
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
        if (loaded) {
            sideSocials.setAttribute("data-visible", "false");
            sideMail.setAttribute("data-visible", "false");
        }

        loaded = false;
        visited = true;
    } else if (window.scrollY + window.innerHeight < document.body.offsetHeight - footerHeight) {
        sideSocials.setAttribute("data-visible", "");
        sideMail.setAttribute("data-visible", "");
        if (visited) {
            sideSocials.setAttribute("data-visible", "visited");
            sideMail.setAttribute("data-visible", "visited");
        }
        loaded = true;
    }

    if (window.scrollY > enableButton) {
        if (window.scrollY + window.innerHeight > document.body.offsetHeight - footerHeight) {
            scrollToTopButton.setAttribute("data-visible", "false");
            loudedThePoint = true
        } else if (loudedThePoint) {
            scrollToTopButton.setAttribute("data-visible", "visited");
        } else {
            scrollToTopButton.setAttribute("data-visible", "true");
        }
        scrolledToThePoint = true;
    } else if (window.scrollY < enableButton) {
        scrollToTopButton.setAttribute("data-visible", "");
        if (scrolledToThePoint == true) {
            scrollToTopButton.setAttribute("data-visible", "false");
        }
        loudedThePoint = true;
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo(0, 0);
});

const moveToNext = document.querySelector('.home-next-button');
const moveAbout = document.querySelector('.about');

moveToNext.addEventListener('click', () => {
    moveToNext.toggleAttribute('data-action');
    moveAbout.scrollIntoView({ behavior: 'smooth' });
    clicked = true;
});

const parent = document.querySelector('.home-next-button');
const child = document.querySelector('.home-next-text');

parent.addEventListener('mouseenter', () => {
    child.classList.add('text-open');
    child.classList.remove('text-close');
});

parent.addEventListener('mouseleave', () => {
    child.classList.add('text-close');
    child.classList.remove('text-open');
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            //entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hid-left-200, .hid-left-400, .hid-left-600, .hid-left-800, .hid-right-200, .hid-right-400, .hid-right-600, .hid-right-800, .hid-bottom-400, .hid-top-200, .hid-top-400');
hiddenElements.forEach((el) => observer.observe(el));
