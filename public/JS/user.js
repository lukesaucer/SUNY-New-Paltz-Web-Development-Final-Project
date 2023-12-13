import { fetchData } from './models/user.js';

let form = document.getElementById("regForm");
form.addEventListener("submit", addUser);

function register(event){
  event.preventDefault(); // prevent the form from submitting normally

  let user = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
    email: document.getElementById("email").value
  }

  fetchData('/users/register', user, 'POST')
  .then(data => {
    if(!data.message) {
      setCurrentUser(data)
      window.location.href = 'index.html'
    }
  })
  .catch(err => {
    let errorSection = document.querySelector("#loginForm .error");
    errorSection.innerText= err.message
  })
}

function setCurrentUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'));
}

function removeCurrentUser() {
  localStorage.removeItem('user');
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
