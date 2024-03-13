const users = [];

async function login() {
    try {
        const response = await fetch('/api/connect', {
          method: 'POST',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify(),
        });
  
        // Store what the service gave us as the high scores
        const success = await response.json();

        if (success) {
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
      } catch {
        // If there was an error then just track scores locally
      }

    success = response.json();
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