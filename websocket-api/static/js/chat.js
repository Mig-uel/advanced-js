/** Get Room Name Param From URL */
function getRoomNameFromURL() {
  const url = document.URL.split('/')
  return url.at(-1)
}

/** Notification Handler */
async function showNotification({ name, text }) {
  const permission = await Notification.requestPermission()

  if (permission === 'granted') {
    const notification = new Notification(`New Chat Message From ${name}`, {
      body: text,
    })

    notification.addEventListener('click', () => {
      window.focus()
      notification.close()
    })
  }
}

/** Create Message Element */
function createMessageElement(msg) {
  const item = document.createElement('li')

  if (msg.type === 'note') {
    const text = document.createElement('i')

    text.textContent = msg.text
    item.appendChild(text)
  } else if (msg.type === 'chat') {
    if (msg.name !== username) {
      if (document.visibilityState !== 'visible') showNotification()
    }

    item.innerHTML = `<b>${msg.name}:</b> ${msg.text}`
  }

  return item
}

function init(roomName, username) {
  const socket = new WebSocket(`ws://localhost:3000/chat/${roomName}`)

  // onopen
  socket.onopen = function (e) {
    const data = { type: 'join', name: username }
    socket.send(JSON.stringify(data))
  }

  // onmessage
  socket.onmessage = (e) => {
    const msg = JSON.parse(e.data)
    document.querySelector('#messages').appendChild(createMessageElement(msg))
  }

  // onerror
  socket.onerror = function (e) {
    console.log('Something went wrong...')
  }

  // onclose event
  socket.onclose = function (e) {
    console.log('WebSocket has closed...')
  }

  return socket
}

const room = getRoomNameFromURL()
const username = prompt('Enter your username:')
const socket = init(room, username.toLowerCase())

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault()

  const input = form.querySelector('#message')

  const payload = { type: 'chat', text: input.value }

  socket.send(JSON.stringify(payload))

  input.value = ''
})
