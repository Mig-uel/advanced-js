// CLIENT-SIDE JS

// Open WebSocket connection from the browser to the server
const socket = new WebSocket(`ws://localhost:3000/chat/people`)
const username = prompt('Enter your username:')

// onopen event
socket.onopen = function (e) {
  console.log('WebSocket Opened')

  const data = { type: 'join', name: username }
  socket.send(JSON.stringify(data))
}

// onmessage event
socket.onmessage = (e) => {
  const msg = JSON.parse(e.data)

  if (msg.type === 'note') {
    const item = document.createElement('li')
    const text = document.createElement('i')

    text.textContent = msg.text
    item.appendChild(text)

    document.querySelector('#messages').appendChild(item)
  }
}

// onerror event
socket.onerror = function (e) {
  console.log('Something went wrong...')
}

// onclose event
socket.onclose = function (e) {
  console.log('WebSocket has closed...')
}
