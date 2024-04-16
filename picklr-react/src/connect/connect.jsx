import React, { useEffect, useRef } from "react";
import Parser from 'html-react-parser';
import { useNavigate } from "react-router-dom";

export function Connect({ userName, authState, onAuthChange }) {
  let userList = []
  
  let currentUser = useRef()

  // document.addEventListener("DOMContentLoaded", function () {
    const storedUserName = localStorage.getItem("userName");
    const storedImageLink = localStorage.getItem("imageLink");
    // const currentUser = document.getElementById("currentUser");
    currentUser = storedUserName;

    var storedUsers = JSON.parse(localStorage.getItem("newUserss"));

    if (!storedUsers) {
      storedUsers = [];
    }

    if (storedUserName != "undefined" && storedImageLink != "undefined") {

      const newUser = {name: storedUserName, imageLink: storedImageLink};

      storedUsers.push(newUser);

      localStorage.removeItem("userName");
      localStorage.removeItem("imageLink");

      localStorage.setItem("newUserss", JSON.stringify(storedUsers));
    }
    
    if (storedUsers) {
      storedUsers.forEach(function (user) {
          const userImage = document.createElement("img");
          const userName = document.createElement("h2");

          userImage.src = user.imageLink;
          userImage.style = "width:100px;height:100px";
          userName.textContent = user.name;

          const userContainer = document.createElement("li");
          userContainer.appendChild(userImage);

          const personInfo = document.createElement("div");
          personInfo.className = "person-info";
          personInfo.appendChild(userName);
          userContainer.appendChild(personInfo);

          userList.push(userContainer);
        });
    }
  // });


  return (
    <main>
      <div>
      <div>
        <h2>Welcome to Connect, {currentUser}!</h2>
        <p>Explore and connect with other Picklrs.</p>
        <ul>        {userList.map(user => 
        <li>{Parser(user.innerHTML)}</li>)}
        </ul>
      </div>
    </div>
    </main>
  );
}
