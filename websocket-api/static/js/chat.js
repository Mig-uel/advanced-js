// CLIENT-SIDE JS

// Open WebSocket connection from the browser to the server
const url = document.URL.split('/')
const room = url.at(-1)
const socket = new WebSocket(`ws://localhost:3000/chat/${room}`)
let username = prompt('Enter your username:')

// onopen event
socket.onopen = function (e) {
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
  } else if (msg.type === 'chat') {
    const item = document.createElement('li')
    item.innerHTML = `<b>${msg.name}:</b> ${msg.text}`

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

const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const input = form.querySelector('#message')

  const payload = { type: 'chat', text: input.value }

  socket.send(JSON.stringify(payload))

  input.value = ''
})
