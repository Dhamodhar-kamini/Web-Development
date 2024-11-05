const form = document.querySelector("form");
const firstnameEL = document.getElementById("firstname");
const lastnameEl = document.getElementById("lastname");
const emailEl = document.getElementById("email");
const phoneEl = document.getElementById("phone");
const msggEl = document.getElementById("msgg");



function sendEmail() {

    const bodymessage = `Full Name: ${firstnameEl.value}. <br> Last Name: ${lastnameEl.value}.<br> 
    Email: ${emailEl.value}.<br> 
    Phone: ${phoneEl.value}.<br> Message: ${msggEl.value}`;

    Email.send({
        SecureToken: "aceaa443-24e9-4590-a21e-c69610f1d809",
        To : 'dhamu20288@gmail.com',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
        Body : bodymessage
    }).then(
      message => {
        if (message == "OK"){
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
              });
        }
      }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
});


