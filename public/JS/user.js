let form = document.getElementById("regForm");
form.addEventListener("submit", addUser);

function addUser(event){
  // code to handle form submission goes here
    event.preventDefault(); // prevent the form from submitting normally
    let register = document.getElementById("username").value;
    let registerList = document.getElementById("registerList");


    let list = document.createElement("list");
    list.innerText = register
    registerList.appendChild(list);
    console.log(register);
};