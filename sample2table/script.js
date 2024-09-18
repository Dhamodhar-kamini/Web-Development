document.getElementById('submitBtn').addEventListener('click', function() {

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const comments = document.getElementById('comments').value;

    
    const summary = `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Gender: ${gender}
        Comments: ${comments}
    `;
    alert(summary);
});
