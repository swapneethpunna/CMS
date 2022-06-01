//password showing and hiding
const eye = document.getElementById("eye");
const password = document.getElementById("password");
const fname= document.getElementById('fname');
const Lname= document.getElementById('Lname');
const usernam= document.getElementById('usernam');
const bd = document.getElementById("Birthday_date");
const emailid = document.getElementById("emailid");
const signup = document.getElementById("signup");
const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
const pw_error = document.getElementById("pw_error");

eye.addEventListener("click", function () {
if (!eye.classList.contains("fa-eye-slash")) {
    eye.classList.add("fa-eye-slash");        
    password.setAttribute("type", "text");
} else {
    eye.classList.remove("fa-eye-slash");
    password.setAttribute("type","password");
}
});

let elements = [fname, Lname, usernam, bd, emailid, signup]

signup.disabled = true;
elements.forEach(element => {
    element.addEventListener('input', () => {
        let span_id = element.parentElement.children[2];
        if (element.value === "") {
            signup.disabled=true;
            span_id.innerHTML="Field can't be empty";
            span_id.style.color='red';
            element.id = "danger";

        } else {
            span_id.textContent="";
            signup.disabled=true;
        }
        if((fname.value !==""  ) &&( Lname.value !=="" ) && (usernam.value !=="")  && (emailid.value !=="")  && (bd.value  !=="" ) ){
            signup.disabled=false;
        } 
    })
});

    

       

    //using date class
const date = new Date();
//extracing year from complete date to check age
const year = date.getFullYear(); //2022
// const userYear = Birthday_date.value.split("-")[0]


signup.addEventListener('click',(e)=>{
    let userYear = bd.value.split("-")[0] // 2022-02-12
    userYear = parseInt(userYear)

    if((year-userYear)<13){
        signup.disabled=true;
        // bd.id="danger"
        let span = bd.parentElement.children[2];
        span.innerHTML="Minimum age to register should be 13 years";
        span.style.color='red';
    }

//validating email
    else if(regx.test(emailid.value)===false){
        signup.disabled=true;
        emailid.id="danger"
        let span = emailid.parentElement.children[2];
        span.innerHTML="Invalid Email"

    //validating date
}
    else if (password.value.length < 8) { // remember to add span in html and ccs 
        pw_error.innerHTML = "Password length should not be less than 8 characters";
        pw_error.setAttribute("class","error");
        password.setAttribute("style","border-color: red");
    }


    //noticing user
    else if((password.value.length > 8) && (regx.test(emailid.value)===true)  && ((year-userYear)>=13)){
        alert("You have been successfully registered !");
        signup.disabled=false;
        

    }

   

    
    
})



