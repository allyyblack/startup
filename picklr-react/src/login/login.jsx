import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;

import $ from 'jquery';
window.$ = $;


export function Login({ userName, authState, onAuthChange }) {
    const [showText, setShowText] = useState(false);
    const navigate = useNavigate();
    
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
    
          navigate("/connect");
    
        } else {
          const body = await response.json();
          const modalEl = document.querySelector('#msgModal');
          modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
          const msgModal = new bootstrap.Modal(modalEl, {});
          msgModal.show();
        }
      }



  return (
    <main>
      <div>
  <title>Picklr HTML</title>
  <link rel="stylesheet" href="main.css"/>


  <main>
    <h1>Welcome</h1>
    <p>Login to connect with picklrs</p>
    <button onClick={() => setShowText(!showText)}>New to Picklr?</button>
    <hr/>

    <label htmlFor="newName">Name</label>
    <input type="text" id="newName" placeholder="Your name here" required />

    <label htmlFor="newUserPassword">Password</label>
    <input type="password" id="newUserPassword" placeholder="Your password here" required />

    {/* <!-- Login --> */}
    {!showText && <div>
    <button onClick={() => loginUser()} type="submit" className="btn btn-primary">
      Login
    </button>
  </div>}


    {/* <!-- Create new user --> */}
    {showText && <div>
        <label htmlFor="imageLink">Profile Image Link</label>
        <input type="url" id="imageLink" placeholder="Enter image link" required />

        <button onClick={() => createUser()} type="submit" className="btn btn-primary">Create User</button>
    </div>}

    {/* <!-- Error dialog --> */}
    <div className="modal fade" id="msgModal" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content text-dark">
          <div className="modal-body"></div>
          <div className="modal-footer">
          </div>
        </div>
      </div>
    </div>

  </main>
      </div>
    </main>
  );
}


