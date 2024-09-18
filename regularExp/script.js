
//let fullnameEl = document.getElementById("fullname");
//let errornameEl = document.getElementById("errorname");
// let usernameEl = document.getElementById("username");
// let errorusernameEl = document.getElementById("errorusername");
// let emailEl = document.getElementById("email");
// let erroremailEl = document.getElementById("erroremail");
// let phonenumberEl = document.getElementById("phonenumber");
// let errorphonenumEl = document.getElementById("errorphonenum");
// let passwordEl = document.getElementById("password");
// let errorpasswordEl = document.getElementById("errorpassword");
// let conformpasswordEl = document.getElementById("conformpassword");
// let errorconformpasswEl = document.getElementById("errorconformpassw");

let registerbtnEl = document.getElementById("registerbtn");

//fullname
function fullname(){
    let fullnameEl = document.getElementById("fullname").value;
    let errornameEl = document.getElementById("errorname");
    let regx = /[A-Z]/;
    if (regx.test(fullnameEl)){
       errornameEl.textContent = "";
       
    }
    else{
       errornameEl.textContent = "Name startswith Capital letter";
        errornameEl.style.color = "red";
    }
}

//username
function username(){
    let usernameEl = document.getElementById("username").value;
    let errorusernameEl = document.getElementById("errorusername");
    let regx = /^[A-Za-z][A-Za-z0-9_@]{7,29}$/;
    if (regx.test(usernameEl)){
        errorusernameEl.textContent = "";
       
    }
    else{
        errorusernameEl.textContent = "Username must contain special characters and numbers";
        errorusernameEl.style.color = "red";
    }
}

//Email
function email(){
    let emailEl = document.getElementById("email").value;
    let erroremailEl = document.getElementById("erroremail");
    let regx = /^([a-zA-Z0-9]+)@([a-zA-Z0-9]).([a-z]{2,8})(.[a-z]{2,8})$/
    if (regx.test(emailEl)){
        erroremailEl.textContent = "";
    }
    else{
        erroremailEl.textContent = "Invalid Email Address";
        erroremailEl.style.color = "red";
    }
    
}

//phonenumber
function phonenumber(){
    let phonenumberEl = document.getElementById("phonenumber").value;
    let errorphonenumEl = document.getElementById("errorphonenum");
    let regx = /^[7-9][0-9]{9}$/;
    if (regx.test(phonenumberEl)){
        errorphonenumEl.textContent = "";
    }
    else{
        errorphonenumEl.textContent = "Invalid Phone number";
        errorphonenumEl.style.color = "red";
    }
}

//password
function passwordcheck(){
    let passwordEl = document.getElementById("password").value;
    let errorpasswordEl = document.getElementById("errorpassword");
    let conformpasswordEl = document.getElementById("conformpassword").value;
    let errorconformpasswEl = document.getElementById("errorconformpassw");
   //let regx = /^[A-Za-z0-9@#_!*&]$/;
   let regx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    // if (!regx.test(passwordEl)){
    //      errorpasswordEl.textContent = "Password must be at least 8 character long and contain both letters and numbers.";
    //      errorpasswordEl.style.color = "red"
    // } 
    if (passwordEl == conformpasswordEl){
        errorpasswordEl.textContent = "";
        errorconformpasswEl.textContent = "";
         }
        else{
        //errorpasswordEl.textContent = "";
        errorconformpasswEl.textContent = "Enter the correct password";
        errorconformpasswEl.style.color = "red";
        }
}


registerbtn.addEventListener("click", function(){
    fullname();
    username();
    email();
    phonenumber();
    passwordcheck();
});
