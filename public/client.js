/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const socket = io.connect('http://localhost:3000', { forceNew: true });

function render(message) {
  const html = `<div>
    <p><strong>${message.author}: </strong> ${message.text}</p>
  </div>`;

  const messages = document.getElementById('messages');
  messages.innerHTML += html;
}

socket.on('messages', (data) => {
  console.log('data: ', data);
  render(data);
});

function addMessage(e) {
  const message = {
    author: document.getElementById('username').value,
    text: document.getElementById('message').value,
  };
  socket.emit('new-message', message);
  document.getElementById('message').value = '';
  return false;
}
