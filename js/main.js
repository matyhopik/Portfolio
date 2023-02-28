/* Changes color depending on browser settings */
const colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
      linkElement = document.querySelector('link[rel="icon"]');

linkElement.href = `files/img/MH-${colorScheme}.svg`;

const blob = document.querySelector('.blob');

/* Mouse following light */
document.addEventListener("mousemove", function(event) {
    blob.animate({
        left: event.clientX + "px",
        top: event.clientY + "px"
    }, { duration: 2000, fill: "forwards" });
});

