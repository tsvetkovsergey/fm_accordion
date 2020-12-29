
const mediaQuery = window.matchMedia('(min-width: 1001px)');

const womanImage = document.querySelector('#woman-img');
const womanDesktopUrl = "images/illustration-woman-online-desktop.svg";
const womanMobileUrl = "images/illustration-woman-online-mobile.svg";

let boxCreated = false;
let womanDesktopCreated = false;
let womanMobileCreated = false;

// Button behavior for FAQ items
const questions = document.querySelectorAll(".question");
questions.forEach(question => {
    question.addEventListener('click', function(event) {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if(panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight / 10 + "rem";
        }
        //  Rotate down arrow icons (animated with css)
        let img = this.querySelector("img");
        if(!img.style.transform) {
            this.querySelector("img").style.transform = "rotate(180deg)";
            this.querySelector("img").style.webkitTransform = "rotate(180deg)";
        } else {
            img.style.transform = null;
        }
    });
});

// Create box image for desktop view
const boxImage = document.createElement('img');
boxImage.setAttribute('id', 'box-img');
boxImage.setAttribute('src', 'images/illustration-box-desktop.svg');
boxImage.setAttribute('alt', "Small box image with floating animation")

// Initial creation of images in card
createBoxImage();
createWomanImage();

// Change images every time view alternate
// between mobile and desktop
window.addEventListener('resize', function(e) {
    createBoxImage();
    createWomanImage();
});

// Create (for desktop) or remove (for mobile)
// box image from DOM
function createBoxImage() {
    if(mediaQuery.matches) {
        if(!boxCreated) {
            document.querySelector('.container').appendChild(boxImage);
            boxCreated = true;
        }
    } else {
        if(boxCreated) {
            document.querySelector('#box-img').remove();
            boxCreated = false;
        }
    }
}

// Change woman image depending on
// current view (desktop/mobile)
function createWomanImage() {
    if(mediaQuery.matches) {
        if(!womanDesktopCreated) {
            womanImage.setAttribute('src', womanDesktopUrl);
            womanDesktopCreated = true;
            womanMobileCreated = false;
        }
    } else {
        if(!womanMobileCreated) {
            womanImage.setAttribute('src', womanMobileUrl);
            womanDesktopCreated = false;
            womanMobileCreated = true;
        }
    }
}
