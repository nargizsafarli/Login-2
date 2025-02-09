
const loginForm=document.querySelector(".loginForm");
const registerForm=document.querySelector(".registerForm");
const getLogin=document.querySelector(".getLogin");
const getRegister=document.querySelector(".getRegister")
const myRegisterForm=document.querySelector(".myRegister")
const eyeIcon=document.querySelector(".eyeIcon")
loginForm.style.display="none";
registerForm.style.display="flex";

getLogin.addEventListener("click",function() {
  loginForm.style.display="none";
  registerForm.style.display="flex";
})

getRegister.addEventListener("click",function() {
    loginForm.style.display="flex";
    registerForm.style.display="none";
  })

eyeIcon.addEventListener("click",function(){
   const passwordInput= document.getElementById("password");

   if(passwordInput.type==="password"){
    passwordInput.type="text"
   eyeIcon.innerHTML=`<i class="fa-regular fa-eye"></i>`

   }
   else{
    passwordInput.type="password"
     eyeIcon.innerHTML=`<i class="fa-regular fa-eye-slash"></i>`
   }
})

const eyeIconPass=document.querySelector(".eyeIconP")
eyeIconPass.addEventListener("click",function(){
    const loginPass=document.getElementById("loginPassword");
    if(loginPass.type==="password"){
        loginPass.type="text"
        eyeIconPass.innerHTML=`<i class="fa-regular fa-eye"></i>`
    }
    else{
        loginPass.type="password"
         eyeIconPass.innerHTML=`<i class="fa-regular fa-eye-slash"></i>`
       }
})

myRegisterForm.addEventListener("submit",function(event){
event.preventDefault();
let username=document.getElementById("username").value.trim();
let password=document.getElementById("password").value.trim();
let email=document.getElementById("email").value.trim();

const usernameRegex =/^[a-zA-Z0-9]{3,13}$/;
const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

let isValid=true
if(!usernameRegex.test(username)){
    document.getElementById("usernameError").innerText=
    "Username must contain at least 3 characters, uppercase letter, and one digit."
    isValid=false
}
else{
    document.getElementById("usernameError").innerText=""
    
}

if(!emailRegex.test(email)){
    document.getElementById("emailError").innerText=
    "Email must be a valid Gmail address (e.g., example@gmail.com)"
    isValid=false
}
else{
    document.getElementById("emailError").innerText=""
   
}

if(!passwordRegex.test(password)){
    document.getElementById("passwordError").innerText=
    "Password must be at least 6 characters long"
    isValid=false
}
else{
    document.getElementById("passwordError").innerText=""
   
}
if(!isValid){
    return;
}

   let users = JSON.parse(localStorage.getItem("users")) || [];
   let existingUser = users.some(user => user.email === email);
   if(existingUser){
      alert("Bu email artiq mövcuddur!");
      return

   }
   else{
      let newUser = {username,password,email };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));       
   }
   if(isValid){
    alert("qeydiyyatiniz ugurla elave olundu")
    myRegisterForm.reset();
   }

})
document.querySelector(".myLoginForm").addEventListener("submit",function(event){
    event.preventDefault();

    let loginEmail = document.getElementById("loginEmail").value.trim();
    let loginPassword = document.getElementById("loginPassword").value;

    let users=JSON.parse(localStorage.getItem("users"))||[];
    let foundUser = users.find(user => user.email === loginEmail && user.password === loginPassword);
    if(foundUser){
        alert("Giris ugurla tamamlandi");
        document.querySelector(".myLoginForm").reset()
        document.getElementById("loginError").style.display="none";
    }
    else{
         document.getElementById("loginError").innerText=
       "Invalid password or Email"
        document.getElementById("loginError").style.display=
       "block"
    }
})
  