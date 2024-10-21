function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    };

    const serviceID = 'service_5i19nep';
    const templateID = 'template_0jtqtb7';

    emailjs.send(serviceID, templateID, params)
        .then(function(res) {
            alert("Thank you for contacting us! " + res.status);
        })
        .catch(function(error) {
            alert("Failed to send email. Error: " + JSON.stringify(error));
        });
}

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function updateSlidePosition() {
    const slideWidth = slides[0].clientWidth;
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    updateSlidePosition();
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalSlides - 1;
    }
    updateSlidePosition();
}

window.addEventListener('resize', updateSlidePosition);


// Make sure to initialize EmailJS somewhere in your code
// emailjs.init('YOUR_USER_ID');