import { fetchData, setCurrentUser } from './main.js';

let form = document.getElementById("regForm");
form.addEventListener("submit", addUser);

function register(e) {
  e.preventDefault()

  let user = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
    email: document.getElementById("email").value
  }

  fetchData("/users/register", user, "POST")
  .then(data => {
    if(!data.message) {
      setCurrentUser(data)
      window.location.href = "profile.html"
    }
  })
  .catch(err => {
    console.log(err)
    let errorSection = document.querySelector("#register-form .error")
    errorSection.innerText = err.message
    document.getElementById("username").value = ""
    document.getElementById("email").value = ""
    document.getElementById("password").value = ""
  })
  
}




// Start of code from previous javascript assignment.

/*
function addUser(event){
  // code to handle form submission goes here
    event.preventDefault(); // prevent the form from submitting normally
    
      let username = document.getElementById("username").value;
      let password = document.getElementById("password").value;
      let email = document.getElementById("email").value; 
  
      const user = {
        userName: username,
        userPassword: password,
        userEmail: email
      }
    */
    
    
    
    
    
    
    // let register = document.getElementById("username").value;
    // let registerList = document.getElementById("registerList");


    // let list = document.createElement("list");
    // list.innerText = register
    // registerList.appendChild(list);
    // console.log(register);

     //return user;
