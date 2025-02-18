const express = require('express')
const app = express()

// serve static folder
app.use(express.static('static'))

/** Handle WebSocket chat */

/** Handle a persistent connection to /chat/[roomName]
 *
 * Note that this is only called *once* per client --- not every time
 * a particular websocket chat is sent.
 *
 * `ws` becomes the socket for the client; it is specific to that visitor.
 * The `ws.send` method is how we'll send messages back to that socket.
 */

// allow for app.ws routes for websocket routes
const wsExpress = require('express-ws')(app)
app.ws('/chat/:room', (ws, req, next) => {
  setInterval(() => {
    ws.send(req.params.room)
  }, 2000)
})

/** Chat Route */
app.get('/:room', (req, res, next) => {
  res.sendFile(`${__dirname}/`)
})

app.listen(3000, () => {
  console.log('SERVER RUNNING')
})
