let chat = 'Carpe diem';

function sendMessage() {
  const userMessage = document.getElementById('user-message').value;
  if (userMessage.trim() !== '') {
    chat += `<br>You: ${userMessage}`;
    document.querySelector('#chat-response').innerHTML = chat;
    // You can also clear the input field after sending a message
    document.getElementById('user-message').value = '';
  }
}

setInterval(() => {
  chat += '<br>Lorum ipsum';
  document.querySelector('#chat-response').innerHTML = chat;
}, 5000);
