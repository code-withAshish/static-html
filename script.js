const form = document.getElementById("login");

function handleSubmit(e) {
  e.preventDefault();
  const data = new FormData(e.target);
  const value = Object.fromEntries(data.entries());
  if (value.username === "ashish" && value.password === "123") {
    window.location.href = "https://www.google.com";
  } else {
    alert("Wrong credentials!!!\nPlease check your username and password");
  }
}
form.addEventListener("submit", handleSubmit);
