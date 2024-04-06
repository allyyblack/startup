const users = [];

async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }
  
  async function createUser() {
    loginOrCreate(`/api/auth/create`);
  }

  async function loginOrCreate(endpoint) {

    const nameEl = document.querySelector("#newName")?.value;

    const imageLinkEl = document.querySelector("#imageLink")?.value;

    const passwordEl = document.querySelector("#newUserPassword")?.value;
    
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ email: nameEl, password: passwordEl }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  
    if (response.ok) {
        localStorage.setItem('userName', nameEl);
        localStorage.setItem("imageLink", imageLinkEl);

      window.location.href = 'connect.html';
    } else {
      const body = await response.json();
      const modalEl = document.querySelector('#msgModal');
      modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
      const msgModal = new bootstrap.Modal(modalEl, {});
      msgModal.show();
    }
  }




async function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);

    const imageLinkEl = document.querySelector("#imageLink");
    localStorage.setItem("imageLink", imageLinkEl.value);

    // const passwordEl = document.querySelector("#userPassword");
    // localStorage.setItem("userPassword", passwordEl.value);

    window.location.href = "connect.html";
    // try {
    //     const response = await fetch('/api/connect', {
    //       method: 'POST',
    //       headers: {'content-type': 'application/json'},
    //       body: JSON.stringify(),
    //     });
  
    //     // Store what the service gave us as the high scores
    //     const success = await response.json();

    //     if (success) {
    //         const nameEl = document.querySelector("#name");
    //         const imageLinkEl = document.querySelector("#imageLink");
        
    //         const user = {
    //             name: nameEl.value,
    //             imageLink: imageLinkEl.value
    //         };
        
    //         users.push(user);
        
    //         localStorage.setItem("users", JSON.stringify(users));
        
    //         window.location.href = "connect.html";
    //     }
    //   } catch {
    //     console.log("This shouldn't happen!! teehee💩❤️")
    //   }

    // success = response.json();
}


// async function createUser() {
//     const nameEl = document.querySelector("#newName");
//     localStorage.setItem("userName", nameEl.value);

//     const imageLinkEl = document.querySelector("#imageLink");
//     localStorage.setItem("imageLink", imageLinkEl.value);

//     // const passwordEl = document.querySelector("#userPassword");
//     // localStorage.setItem("userPassword", passwordEl.value);

//     window.location.href = "connect.html";
    // try {
    //     const response = await fetch('/api/connect', {
    //       method: 'POST',
    //       headers: {'content-type': 'application/json'},
    //       body: JSON.stringify(),
    //     });
  
    //     // Store what the service gave us as the high scores
    //     const success = await response.json();

    //     if (success) {
    //         const nameEl = document.querySelector("#name");
    //         const imageLinkEl = document.querySelector("#imageLink");
        
    //         const user = {
    //             name: nameEl.value,
    //             imageLink: imageLinkEl.value
    //         };
        
    //         users.push(user);
        
    //         localStorage.setItem("users", JSON.stringify(users));
        
    //         window.location.href = "connect.html";
    //     }
    //   } catch {
    //     console.log("This shouldn't happen!! teehee💩❤️")
    //   }

    // success = response.json();
// }

// document.addEventListener("DOMContentLoaded", function () {
//     const storedUserName = localStorage.getItem("userName");
//     const storedImageLink = localStorage.getItem("imageLink");


//     if (storedUserName && storedImageLink) {
//         const userNameDisplay = document.getElementById("userNameDisplay");
//         const userImage = document.querySelector("ul li img");

//         userNameDisplay.textContent = storedUserName;
//         userImage.src = storedImageLink;
//     }

//     const storedUsers = localStorage.getItem("users");

//     if (storedUsers) {
//         const parsedUsers = JSON.parse(storedUsers);

//         parsedUsers.forEach(function (user) {
//             const userList = document.getElementById("userList");

//             const listItem = document.createElement("li");
//             listItem.textContent = user.name;

//             userList.appendChild(listItem);
//         });
//     }
// });
