// CLIENT-SIDE JS

// Open WebSocket connection from the browser to the server
const socket = new WebSocket(`ws://localhost:3000/chat/people`)

// onopen event
socket.onopen = function (e) {
  console.log('WebSocket Opened')
}

// onmessage event
socket.onmessage = (e) => {
  console.log('message from websocket', e.data)
}

// onerror event
socket.onerror = function (e) {
  console.log('Something went wrong...')
}

// onclose event
socket.onclose = function (e) {
  console.log('WebSocket has closed...')
}
