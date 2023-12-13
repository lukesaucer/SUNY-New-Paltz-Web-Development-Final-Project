let form = document.getElementById("postForm");
form.addEventListener("submit", addPost);

const nav = document.querySelector('nav');
if(getCurrentUser()) {
  nav.innerHTML = `
  <ul>
    <li><a href="post.html">Home</a></li>
    <li><a href="profile.html">Profile</a></li>
    <li><a href="login.html" id="logout">Logout</a></li>
  </ul>
  `
} else {
  nav.innerHTML = `
  <ul>
    <li><a href="login.html">Login</a></li>
    <li><a href="register.html">Register</a></li>
  </ul>
  `;
}

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