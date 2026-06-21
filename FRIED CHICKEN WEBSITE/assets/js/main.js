/*
 * =============== SHOW / HIDE NAV MENU ===============
 *
 * Logic:
 * - Selects the nav menu container, toggle button (hamburger), and close button.
 * - When the toggle button (#nav-toggle) is clicked, the 'show-menu' class is added
 *   to the nav menu, making it visible (typically slides in from the right on mobile).
 * - When the close button (#nav-close) is clicked, the 'show-menu' class is removed,
 *   hiding the menu.
 * - Null-checks on navToggle and navClose prevent errors if those elements don't
 *   exist in the DOM (e.g., on desktop layouts where they may be omitted).
 */

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// Show the mobile nav menu when the hamburger toggle is clicked
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Hide the mobile nav menu when the close button is clicked
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}


/*
 * =============== AUTO-CLOSE MENU ON NAV LINK CLICK ===============
 *
 * Logic:
 * - Selects every element with the class '.nav__link' (each navigation link).
 * - When any nav link is clicked, the 'linkAction' callback removes the
 *   'show-menu' class from the nav menu (re-fetched by ID to avoid stale refs).
 * - This ensures that on mobile, tapping a nav link both navigates and closes
 *   the menu in one action, improving UX.
 */

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
};
navLink.forEach(link => link.addEventListener('click', linkAction));


/*
 * =============== ADD SHADOW TO HEADER ON SCROLL ===============
 *
 * Logic:
 * - Listens to the window 'scroll' event.
 * - If the current vertical scroll position (window.scrollY) reaches 50px
 *   or more, the 'shadow-header' class is added to the <header> element,
 *   which typically applies a box-shadow / bottom border for visual depth.
 * - Below 50px, the class is removed, keeping the header clean at the top.
 */

const shadowHeader = () => {
    const header = document.getElementById('header');
    if (window.scrollY >= 50) {
        header.classList.add('shadow-header');
    } else {
        header.classList.remove('shadow-header');
    }
};
window.addEventListener('scroll', shadowHeader);


/*
 * =============== SHOW SCROLL-TO-TOP BUTTON ===============
 *
 * Logic:
 * - Listens to the window 'scroll' event.
 * - When the user scrolls down past 3500px from the top, the 'show-scroll'
 *   class is added to the scroll-up button (a fixed-position anchor),
 *   making it visible/fade-in so the user can quickly jump back to the top.
 * - Above 3500px, the class is removed and the button stays hidden.
 */

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    if (window.scrollY >= 3500) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
};
window.addEventListener('scroll', scrollUp);


/*
 * =============== HIGHLIGHT ACTIVE SECTION IN NAV ===============
 *
 * Logic:
 * - Selects every <section> that has an 'id' attribute.
 * - On every scroll event, iterates through all sections.
 * - For each section:
 *   1. Reads its offsetTop (distance from the top of the page) minus a 58px
 *      offset (to account for a fixed header).
 *   2. Reads its offsetHeight (total height of the section).
 *   3. If window.scrollY falls within the range [sectionTop, sectionTop + height],
 *      the corresponding nav link (found via an attribute-selector match on the
 *      section's id) gets the 'active-link' class.
 *   4. Otherwise, the class is removed.
 * - This gives users visual feedback of which page section they are currently
 *   viewing, highlighting the corresponding nav item.
 */

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector(
                '.nav__menu a[href*=' + sectionId + ']'
            );

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link');
        } else {
            sectionClass.classList.remove('active-link');
        }
    });
};
window.addEventListener('scroll', scrollActive);


/*=============== SCROLL REVEAL ANIMATION ===============*/