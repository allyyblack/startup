function login() {
  const nameEl = document.querySelector("#name");
  localStorage.setItem("userName", nameEl.value);
  const imageLinkEl = document.querySelector("#imageLink");
  localStorage.setItem("imageLink", imageLinkEl.value);
  window.location.href = "chat.html";
}
