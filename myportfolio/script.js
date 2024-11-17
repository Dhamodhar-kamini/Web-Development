// const form = document.querySelector("form");
// const firstnameEl = document.getElementById("firstname");
// const lastnameEl = document.getElementById("lastname");
// const emailEl = document.getElementById("email");
// const phoneEl = document.getElementById("phone");
// const msggEl = document.getElementById("msgg");



// function sendEmail() {

//     const bodymessage = `Full Name: ${firstnameEl.value}. <br> Last Name: ${lastnameEl.value}.<br> 
//     Email: ${emailEl.value}.<br> 
//     Phone: ${phoneEl.value}.<br> Message: ${msggEl.value}`;

//     Email.send({
//         SecureToken: "aceaa443-24e9-4590-a21e-c69610f1d809",
//         To : 'dhamu20288@gmail.com',
//         From : "dhamu20288@gmail.com",
//         Subject : "This is the subject",
//         Body : bodymessage
//     }).then(
//       message => {
//         if (message == "OK"){
//             Swal.fire({
//                 title: "Good job!",
//                 text: "You clicked the button!",
//                 icon: "success"
//               });
//         }
//       }
//     );
// }

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     sendEmail();
// });


// Select form and input fields
const form = document.querySelector("form");
const firstnameEl = document.getElementById("firstname");
const lastnameEl = document.getElementById("lastname");
const emailEl = document.getElementById("email");
const phoneEl = document.getElementById("phone");
const msggEl = document.getElementById("msgg");

function sendEmail() {
    // Create body message with line breaks for better formatting
    const bodymessage = `
        Full Name: ${firstnameEl.value}\n
        Last Name: ${lastnameEl.value}\n
        Email: ${emailEl.value}\n
        Phone: ${phoneEl.value}\n
        Message: ${msggEl.value}
    `;

    // Send email using Email.send() function from SMTP.js
    Email.send({
        SecureToken: "aceaa443-24e9-4590-a21e-c69610f1d809", // Make sure this token is valid
        To: 'dhamu20288@gmail.com',
        From: "dhamu20288@gmail.com",
        Subject: "This is the subject",
        Body: bodymessage
    }).then(
      message => {
        if (message === "OK") {
            // Display success message
            Swal.fire({
                title: "Success!",
                text: "Email sent successfully!",
                icon: "success"
            });
        } else {
            // Handle email sending error
            Swal.fire({
                title: "Error!",
                text: "Failed to send email. Please try again.",
                icon: "error"
            });
        }
      }
    ).catch(error => {
        // Handle any errors that occur
        Swal.fire({
            title: "Error!",
            text: `There was an error sending the email: ${error}`,
            icon: "error"
        });
    });
}

// Prevent form default submission and trigger sendEmail function
form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
});
