function user_login() {
  document.cookie = user = document.getElementById("username").innerText
  document.cookie = pass = document.getElementById("password").innerText
}
function user_logout() {
  document.cookie = user = null
  document.cookie = pass = null
}