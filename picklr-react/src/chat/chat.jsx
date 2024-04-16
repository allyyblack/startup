import React, { useState, useRef } from "react";
import { TextField } from '@material-ui/core';
import Parser from 'html-react-parser';

// import "/chatClient.js";
// import { sendMessage } from '/chatClient.js';

export function Chat({}) {
//   let newMessage = useRef();
//   let name = useRef();
//   let chatText = []

//   let chatControls = useRef();

//   // Adjust the webSocket protocol to what is being used for HTTP
// const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
// const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

// // Display that we have opened the webSocket
// socket.onopen = (event) => {
//   appendMsg('system', 'websocket', 'connected');
// };

// // Display messages we receive from our friends
// socket.onmessage = async (event) => {
//   const text = await event.data.text();
//   const chat = JSON.parse(text);
//   appendMsg('friend', chat.name, chat.msg);
// };

// // If the webSocket is closed then disable the interface
// socket.onclose = (event) => {
//   appendMsg('system', 'websocket', 'disconnected');
//   document.querySelector('#name-controls').disabled = true;
//   document.querySelector('#chat-controls').disabled = true;
// };

// // Send a message over the webSocket
// function sendMessage() {
//   let msgEl = newMessage.current.value;
//   let msg = msgEl;
//   if (!!msgEl) {
//     appendMsg('me', 'me', msg);
//     // const name = document.querySelector('#my-name').value;
//     console.log(msg);
//     socket.send(`{"name":"${name.current.value}", "msg":"${msg}"}`);
//   }
// }

// // Create one long list of messages
// function appendMsg(cls, from, msg) {
//   const chatEl = document.createElement('div');
//   chatEl.innerHTML = `<span class="${cls}">${from}</span>: ${msg}</div>`;
//   setText(chatText + chatEl);
// }

  return (
    <main>
      <div>
      <div className="name">
      <fieldset id="name-controls">
        <legend>My Name</legend>
        <TextField inputRef={name} />
      </fieldset>
    </div>

    <fieldset ref={chatControls}>
      <legend>What's on your mind?</legend>
      <TextField inputRef={newMessage} />
    </fieldset>
      </div>
    </main>
  );
}
