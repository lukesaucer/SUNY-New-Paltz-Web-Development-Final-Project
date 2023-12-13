let form = document.getElementById("loginForm");
form.addEventListener("submit", loginUser);

function loginUser(event){
  // code to handle form submission goes here
    event.preventDefault(); // prevent the form from submitting normally
    
    let user = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value
    }

    fetchData('/users/login', user, 'POST')
    .then(data => {
      if(!data.message) {
        window.location.href = 'index.html'
      }
    })
    .catch(err => {
      let errorSection = document.querySelector("#loginForm .error");
      errorSection.innerText= err.message
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
