

let submitbtnEl = document.getElementById("submitbtn");

function submitbtn(){
    let usernameEl = document.getElementById("username").value;
    
    let regx = /[A-Z]/;
    if (regx.test(usernameEl)){
        let errornameEl = document.getElementById("errorname");
        errornameEl.textContent = "valid";
        errornameEl.style.color = "green";
    }
    else{
        let errornameEl = document.getElementById("errorname");
        errornameEl.textContent = "Username starts with captial letter";
        errornameEl.style.color = "red";
    }
}


//submitbtnEl.addEventListener("click", username);