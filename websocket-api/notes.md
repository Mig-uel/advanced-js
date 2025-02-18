# WebSocket API

WebSocket API is a protocol that provides full-duplex communication channels over a single TCP connection. It is used in web applications to provide real-time communication between a client and a server.

- Enables real-time communication between a client and a server.
- Provides full-duplex communication channels over a single TCP connection.
  - A full-duplex communication channel allows both parties to send messages to each other simultaneously.
  - In contrast, a half-duplex communication channel allows only one party to send messages at a time.
  - In layman's terms, full-duplex communication is like a telephone conversation, where both parties can speak and listen at the same time.
- Uses the ws:// or wss:// protocol.
- There are also web APIs for WebRTC (Web Real-Time Communication) API, which provides real-time audio, video, and data communication between browsers.

```javascript
const socket = new WebSocket('ws://localhost:8080')
socket.onmessage = (e) => {
  clg(e.data)
}
socket.send('Hello, server!')
```

WebSocket API is widely used in real-time applications such as chat applications, online gaming, financial trading platforms, and collaborative editing tools.

## Long Polling vs. Polling vs. WebSocket

- **Polling**: The client sends a request to the server at regular intervals to check for new data. This can lead to unnecessary requests and high latency.
  - `setInterval(() => { fetch('/data').then(res => res.json()).then(data => console.log(data)) }, 1000)`
- **Long Polling**: The client sends a request to the server, and the server holds the request open until new data is available or a timeout occurs. This reduces the number of requests but still has latency issues.
- **WebSocket**: Provides a full-duplex communication channel over a single TCP connection, allowing real-time communication between the client and server with low latency.
