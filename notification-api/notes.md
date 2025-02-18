# Notifications WebAPI

Notifications API is a Web API that allows web applications to send notifications to users outside the context of the web page.

- Enables web applications to send notifications to users.
- Notifications can be displayed even when the web page is not visible.
- Notifications can be displayed on the desktop or device.
- Notifications can be customized with a title, body, icon, and more.

```js
async function showNotification() {
  const permission = await Notification.requestPermission()

  if (permission === 'granted') {
    const notification = new Notification('Hello, world!', {
      body: 'Here is a notification body!',
      icon: 'path/to/icon.png',
    })
  }
}

showNotification()
```

We can listen for different events on the notification object:

- `click`: Fired when the user clicks on the notification.
- `close`: Fired when the user closes the notification.
- `error`: Fired when the notification encounters an error.

```js
notification.addEventListener('click', () => {
  console.log('Notification clicked!')
})
```
