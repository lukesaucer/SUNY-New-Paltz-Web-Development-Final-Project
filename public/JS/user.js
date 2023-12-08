let form = document.getElementById("regForm");
form.addEventListener("submit", addUser);

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
    
    
    
    
    
    
    
    // let register = document.getElementById("username").value;
    // let registerList = document.getElementById("registerList");


    // let list = document.createElement("list");
    // list.innerText = register
    // registerList.appendChild(list);
    // console.log(register);

    return user;
};