const headerNav = document.querySelector('.primary-header'),
      sideSocials = document.querySelector('.main-socials'),
      sideMail = document.querySelector('.main-email'),
      footerHeight = document.querySelector('.primary-footer').offsetHeight,
      scrollToTopButton = document.querySelector('.return-to-top'),
      enableButton = document.querySelector('.about').offsetTop - (document.querySelector('.about').offsetHeight / 2);

var visited = false,
    loaded = false,
    scrolledToThePoint = false,
    loudedThePoint = false,
    clicked = false;

/* Sets default values for elements */
if (scrollY == 0) {
    sideSocials.setAttribute("data-visible", "");
    sideMail.setAttribute("data-visible", "");
    scrollToTopButton.setAttribute("data-visible", "");
}

window.addEventListener('scroll', function() {
    /* Hides navbar when user scroll out of its vision */
    if (window.scrollY > 500) {
        if (navigation.hasAttribute("data-visible")) {
            navButton.setAttribute("aria-expanded", false);
            navigation.toggleAttribute("data-visible");
            headerNav.toggleAttribute("data-overlay");
        }
    }

    /* Sides */
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

    /* Scroll on top button */
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

/* Scroll to the top of the page */
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo(0, 0);
});

/* Home arrow that moves you on about section */
const moveToNext = document.querySelector('.home-next-button'),
      moveAbout = document.querySelector('.about');

moveToNext.addEventListener('click', () => {
    moveToNext.toggleAttribute('data-action');
    moveAbout.scrollIntoView({ behavior: 'smooth' });
    clicked = true;
});

const parent = document.querySelector('.home-next'),
      child = document.querySelector('.home-next-text');

/* Hover effect for home arrow */
parent.addEventListener('mouseenter', () => {
    child.classList.add('text-open');
    child.classList.remove('text-close');
});

parent.addEventListener('mouseleave', () => {
    child.classList.add('text-close');
    child.classList.remove('text-open');
});


/* Onscroll animations */
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