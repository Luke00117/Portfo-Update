const div = document.querySelector(".typed-text");
const text = "My Name is Luke Gray I'm a Web Developer";

const div2 = document.querySelector(".typed-text-2");
const text2 = "Welcome to my About Me Page";

const div3 = document.querySelector(".typed-text-3");
const text3 = "Coding Examples Coming Soon";

const div4 = document.querySelector(".typed-text-4");
const text4 = "Netmatters SCS Bootcamp";


function typingEffect(element, text, i = 0) {
    if (i === 0) {
        element.textContent = "";
    }

    element.textContent += text[i];

    if (i === text.length - 1) {
        return;
    }

    setTimeout(() => typingEffect(element, text, i + 1), 50)

    
    
}




// hamburger toggle to turn it to a cross and slide out nav
function myFunction(x) {
            x.classList.toggle("change");
        }

function toggleMenu() {
            var menu = document.querySelector('.main-navigation');
            menu.classList.toggle('active');
        }



// Form validation
function validateForm() {
            var firstName = document.getElementById('first-name').value.trim();
            var lastName = document.getElementById('last-name').value.trim();
            var email = document.getElementById('email');
            var emailValue = email.value.trim();
            var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


            document.getElementById('error').innerHTML = '';


            if (firstName === '') {
                logError('First name is required.', 'first-name');
                return false;
            }

            if (lastName === '') {
                logError('Last name is required.', 'last-name');
                return false;
            }

            if (emailValue === '' || !emailRegex.test(emailValue)) {
                email.setCustomValidity('Please enter a valid email address.');
                logError('Please enter a valid email address. example@gmail.com', 'email');
                return false;
            } else {
                email.setCustomValidity('');
            }


            return true;
        }

        function logError(message, elementId) {
            console.error(message);
            document.getElementById('error').innerHTML = message;

            document.getElementById(elementId).focus();
        }



//scroll down button functionality 
document.addEventListener('DOMContentLoaded', function () {
    var isMatchingURL = window.location.href === 'https://luke00117.github.io/Portfo-New/';
    var isIndexPage = window.location.pathname.endsWith('/index.html');

    if (isMatchingURL || isIndexPage) {
        var scrollDownButton = document.getElementById('scrollDownButton');
        var projectBlock = document.getElementById('portfolio');

        console.log('Button:', scrollDownButton);
        console.log('Project Block:', projectBlock);

        scrollDownButton.addEventListener('click', function () {
            console.log('Button Clicked!');
            projectBlock.scrollIntoView({ behavior: 'smooth' });
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname.endsWith('/about.html')) {
        var scrollDownButton = document.getElementById('scrollDownButton');
        var aboutMeSection = document.getElementById('aboutMeSection');

        console.log('Button:', scrollDownButton);
        console.log('About Me Section:', aboutMeSection);

        scrollDownButton.addEventListener('click', function () {
            console.log('Button Clicked!');
            aboutMeSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname.endsWith('/scheme.html')) {
        var scrollDownButton = document.getElementById('scrollDownButton');
        var schemeInfoSection = document.getElementById('schemeInfoSection');

        console.log('Button:', scrollDownButton);
        console.log('Scheme Info Section:', schemeInfoSection);

        scrollDownButton.addEventListener('click', function () {
            console.log('Button Clicked!');
            schemeInfoSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});


// Return to top smooth scrolling 
document.addEventListener('DOMContentLoaded', function () {
            var returnToTopButton = document.getElementById('returnToTop');

            returnToTopButton.addEventListener('click', function (event) {
                event.preventDefault();
                scrollToTop();
            });

            function scrollToTop() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });