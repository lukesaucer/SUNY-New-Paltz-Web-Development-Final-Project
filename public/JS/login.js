import { fetchData, setCurrentuser } from './main.js';

let form = document.getElementById("loginForm");
form.addEventListener("submit", loginUser);

function loginUser(event){
  // code to handle form submission goes here
    event.preventDefault(); // prevent the form from submitting normally
    
      let user = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        email: document.getElementById("email").value
      }
    
      fetchData('/users/register', user, 'POST')
      .then(data => {
        if(!data.message) {
          console.log(data)
          setCurrentUser(data)
          window.location.href = 'index.html'
        }
      })
      .catch(err => {
        let errorSection = document.querySelector("#loginForm .error");
        errorSection.innerText= err.message
        document.getElementById("username").value = ""
        document.getElementById("password").value = ""
      })
    }
  






    // Original code from javascript assignment
    
    /*
    let login = document.getElementById("username").value;
    let loginList = document.getElementById("loginList");

    let list = document.createElement("list");
    list.innerText = login
    loginList.appendChild(list);
    console.log(login);
    */
