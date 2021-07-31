function sendMail(contactForm) {
    emailjs.send("gmail", "Sonia", {
        "from_name": contactForm.from_name.value,
        "from_email": contactForm.email_address.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}