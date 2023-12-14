let form = document.getElementById("postForm");
form.addEventListener("submit", addPost);

const nav = document.querySelector('nav');


function addPost(event){
  // code to handle form submission goes here
    event.preventDefault(); // prevent the form from submitting normally
    let post = document.getElementById("post").value;
    let postList = document.getElementById("postList");

    let list = document.createElement("list");
    list.innerText = post
    postList.appendChild(list);
    console.log(post);
};