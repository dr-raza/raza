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

// Make sure to initialize EmailJS somewhere in your code
// emailjs.init('YOUR_USER_ID');