let nav = document.querySelector("nav")

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

// Fetch method implementation:
export async function fetchData(route = '', data = {}, methodType) {
  const response = await fetch(`http://localhost:3000${route}`, {
    method: methodType, // *POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) 
  });
  if(response.ok) {
    return await response.json(); 
  } else {
    throw await response.json();
  }
} 

// LOCAL STORAGE FUNCTIONALITY
export function setCurrentUser(user) {
    localStorage.setItem('user', JSON.stringify(user))
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'))
}

export function logout() {
  localStorage.removeItem('user')
  window.location.href = "login.html"
}

let logoutBtn = document.getElementById("logout")
if(logoutBtn) logoutBtn.addEventListener("click", logout)