async function showNotification() {
  const permission = await Notification.requestPermission()

  if (permission === 'granted') {
    const notification = new Notification('My First Notification', {
      body: 'This is the body of my first notification.',
    })

    notification.addEventListener('click', (e) => {
      console.log('clicked the notification')
      window.focus()
      notification.close()
    })

    notification.addEventListener('close', () => {
      console.log('closed the notification')
    })
  }
}

const button = document.querySelector('button')
button.addEventListener('click', showNotification)
