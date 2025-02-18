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
