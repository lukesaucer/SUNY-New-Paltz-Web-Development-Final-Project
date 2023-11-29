let form = document.getElementById("loginForm");
form.addEventListener("submit", loginUser);

function loginUser(event){
  // code to handle form submission goes here
    event.preventDefault(); // prevent the form from submitting normally
    let login = document.getElementById("username").value;
    let loginList = document.getElementById("loginList");

    let list = document.createElement("list");
    list.innerText = login
    loginList.appendChild(list);
    console.log(login);
};