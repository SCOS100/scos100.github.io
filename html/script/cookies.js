function user_login(username, password) {
  document.cookie = user = username
  document.cookie = pass = password
}
function user_logout() {
  document.cookie = user = null
  document.cookie = pass = null
}
function set_cust(name, value) {
  document.cookie = name = value
}