const express = require('express')
const ChatUser = require('./ChatUser')
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
  try {
    const user = new ChatUser(
      ws.send.bind(ws), // fn to call to message this user
      req.params.room // name of room for user
    )

    // register handlers for message-received, connection closed

    ws.on('message', function (data) {
      try {
        user.handleMessage(data)
      } catch (error) {
        console.error(error)
      }
    })

    ws.on('close', function () {
      try {
        user.handleClose()
      } catch (error) {
        console.error(error)
      }
    })
  } catch (error) {
    console.error(error)
  }
})

/** Chat Route */
app.get('/:room', (req, res, next) => {
  res.sendFile(`${__dirname}/`)
})

app.listen(3000, () => {
  console.log('SERVER RUNNING')
})
