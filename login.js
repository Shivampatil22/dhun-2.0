let data = []
let passing = []
let c = 0;

function validat() {

    var name = document.getElementById('name').value;
    let nh = document.getElementById("nameHelp")
    if (name == "") {
        nh.textContent = "Name cannot be empty"
        nh.style.color = "red";
        return false;
    }
    else if (/[^a-zA-Z]/.test(name)) {
        nh.textContent = "Name must contain only alphabets"
        nh.style.color = "red";
        return false;
    }
    else {
        nh.textContent = " "
    }
    var password = document.getElementById('pwd').value;
    let ph = document.getElementById("passHelp")
    if (password == "") {
        ph.textContent = "Password cannot be empty"
        ph.style.color = "red";
        return false;
    }
    else if (password.length < 6 || password.length > 12) {
        ph.textContent = "Password length must be between 6 and 12 characters"
        ph.style.color = "red";
        return false;
    }
    else {
        ph.textContent = " "

    }
    var confirm_password = document.getElementById('cpwd').value;
    let ch = document.getElementById("cpassHelp")
    if (confirm_password == "") {
        ch.textContent = "Confirm Password cannot be empty"
        ch.style.color = "red";
        return false;
    }
    else if (password != confirm_password) {
        ch.textContent = "Confirm password must be same as password"
        ch.style.color = "red";
        return false;
    }
    else {
        ch.textContent = " "
    }
    var email = document.getElementById('email').value;
    let eh = document.getElementById("cpassHelp")
    if (email == "") {
        eh.textContent = "Email cannot be empty"
        eh.style.color = "red"
        return false;
    }
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        eh.textContent = "You have entered an invalid email address!"
        eh.style.color = "red"
        return false;
    }
    else {
        eh.textContent = " "
    }
    console.log(name)

   
    data.push(name);
    passing.push(password);
    localStorage.setItem(data[data.length-1],passing[passing.length-1])
    window.location.href = "music.html";
    name=" "
    password=" "
    confirm_password=" "
    email=" "

}
function lvalidateForm() {
    console.log(1)
    var lname = document.getElementById('l_name').value;
    let nhi = document.getElementById("lnameHelp")
    if (lname == "") {
        nhi.textContent = "Name cannot be empty"
        nhi.style.color = "red";


    }
    else if (/[^a-zA-Z]/.test(lname)) {
        nhi.textContent = "Name must contain only alphabets"
        nhi.style.color = "red";


    }
    else {
        nhi.textContent = " "
    }

    var lpassword = document.getElementById('l_pwd').value;

    let phi = document.getElementById("lpassHelp")
    if (lpassword == "") {
        phi.textContent = "Password cannot be empty"
        phi.style.color = "red";


    }
    else if (lpassword.length < 6 || lpassword.length > 12) {
        phi.textContent = "Password length must be between 6 and 12 characters"
        phi.style.color = "red";


    }
    else {
        console.log(lpassword);
        phi.textContent = " "
        var flag = 0;
        
        if(localStorage.getItem(lname)==lpassword){
            flag=1;
        }
        
    }

    console.log(1);
    if (flag == 0) {
        phi.textContent = "Incorrect password";
    }
    if(flag==1){
        window.location.href = "music.html";
    }
    lname=" "
    lpassword=" "
  //  flag=0;
}

 


const c1 = document.getElementById("sb")
const c2 = document.getElementById("lb")
h1 = document.getElementById("head")

function log() {
    c1.classList.add("form_visible")
    c2.classList.add("move_right")
    c1.classList.remove("move_left")
    c2.classList.remove("form_visible")
    c2.classList.add("rp")
    h1.classList.remove("heading")
    h1.classList.add("heading2")

}
function sign() {
    c2.classList.add("form_visible")
    c1.classList.remove("form_visible")
    c2.classList.remove("move_right")
    c1.classList.add("move_left")
    h1.classList.remove("heading2")
    h1.classList.add("heading")


}