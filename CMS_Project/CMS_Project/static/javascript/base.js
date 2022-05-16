//password showing and hiding
const eye = document.getElementById("eye");
var pw = document.getElementById("password");

eye.addEventListener("click", function () {
if (!eye.classList.contains("fa-eye-slash")) {
    eye.classList.add("fa-eye-slash");        
    pw.setAttribute("type", "text");
} else {
    eye.classList.remove("fa-eye-slash");
    pw.setAttribute("type","password");
}
});

  //  validating email address
function validate() {
    var bday_error = document.getElementById("bday_error");
    var bd = document.querySelector("#Birthday_date")
    const date = new Date();
    const year = date.getFullYear();
    let userYear = bd.value.split("-")[0] // 2022-02-12
    userYear = parseInt(userYear)

    if (year-userYear<13) {  
        // alert("Minimum age should be 13 years");
        bday_error.innerHTML = "Minimum required age is 13 years";
        bday_error.setAttribute("class","error");
        bd.setAttribute("style","border-color: red");
    return false;

    }
};


var fnam = document.querySelector("#fname")
var lnam =document.querySelector("#Lname")
var emailid= document.getElementById("emailid");
const signinbtn = document.getElementById("signup");
var fname_error = document.getElementById("fname_error");
var lname_error = document.getElementById("lname_error");
const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
signinbtn.addEventListener("click", function() {
    if (fnam.value.length === 0) {      
        fname_error.innerHTML = "First Name cannot be empty";
        fname_error.setAttribute("class","error");
        fname.setAttribute("style","border-color: red");
    return false;
    }

    else if (lnam.value.length === 0) {
        lname_error.innerHTML = "Last Name cannot be empty";
        lname_error.setAttribute("class","error");
        Lname.setAttribute("style","border-color: red");
    return false;
    }     
//  e.preventDefault();
    else if (reg.test(emailid.value) === false) {  
        alert("Invalid Email Address"); 
    return false;
    }
});

