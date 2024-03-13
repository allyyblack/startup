// function login() {
//   const nameEl = document.querySelector("#name");
//   const imageLinkEl = document.querySelector("#imageLink");

//   localStorage.setItem("userName", nameEl.value);
//   localStorage.setItem("imageLink", imageLinkEl.value);

//   window.location.href = "connect.html";
// }

// Initialize an array to store user information
const users = [];

function login() {
    const nameEl = document.querySelector("#name");
    const imageLinkEl = document.querySelector("#imageLink");

    const user = {
        name: nameEl.value,
        imageLink: imageLinkEl.value
    };

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    window.location.href = "connect.html";
}

document.addEventListener("DOMContentLoaded", function () {
    const storedUserName = localStorage.getItem("userName");
    const storedImageLink = localStorage.getItem("imageLink");

    if (storedUserName && storedImageLink) {
        const userNameDisplay = document.getElementById("userNameDisplay");
        const userImage = document.querySelector("ul li img");

        userNameDisplay.textContent = storedUserName;
        userImage.src = storedImageLink;
    }

    const storedUsers = localStorage.getItem("users");

    if (storedUsers) {
        const parsedUsers = JSON.parse(storedUsers);

        parsedUsers.forEach(function (user) {
            const userList = document.getElementById("userList");

            const listItem = document.createElement("li");
            listItem.textContent = user.name;

            userList.appendChild(listItem);
        });
    }
});

x