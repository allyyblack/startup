function sendMessage() {
  const messageInput = document.getElementById("messageInput");
  const chatMessages = document.getElementById("chatMessages");  // Corrected ID

  const message = messageInput.value.trim();

  if (message !== "") {
      chatMessages.innerHTML += `<p><strong>${localStorage.getItem("userName")}:</strong> ${message}</p>`;
      messageInput.value = "";
  }
}

let chatMessages = ['Carpe diem'];

setInterval(() => {
    const newMessage = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. ${new Date().toLocaleTimeString()}`;
    
    chatMessages.push(newMessage);

    updateChatDisplay();
}, 5000);

function updateChatDisplay() {
    const chatMessagesElement = document.querySelector('#chatMessages');  // Corrected ID
    chatMessagesElement.innerHTML = chatMessages.map(msg => `<p>${msg}</p>`).join('');
}

updateChatDisplay();
