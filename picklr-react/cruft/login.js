(async () => {
  const userName = localStorage.getItem('userName');
  if (userName) {
    setDisplay('displayMenu', 'block');
  } else {
    setDisplay('displayMenu', 'none');
  }
})();

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
        localStorage.setItem("currentUser", nameEl);


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

    window.location.href = "connect.html";
}

