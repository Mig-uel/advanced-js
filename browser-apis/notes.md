# Browser APIs: Geolocation, Intersection Observer, and More!

## Geolocation API

The Geolocation API allows you to access the user's geographical location. It is supported by most modern browsers and can be used to provide location-based services such as maps, weather information, and local search.

- Allows users o share their location with web applications

```js
if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords

    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`)
  })
}
```

We can also watch the user's location by using the `watchPosition` method:

```js
const watchId = navigator.geolocation.watchPosition((position) => {
  const { latitude, longitude } = position.coords

  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`)
})
```

To stop watching the user's location, we can use the `clearWatch` method:

```js
navigator.geolocation.clearWatch(watchId)
```

## MediaStream API (getUserMedia)

The MediaStream API allows you to access the user's camera and microphone. It is commonly used for video conferencing, video recording, and audio recording.

```js
async function getMediaStream() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    })

    const videoElement = document.createElement('video')
    videoElement.srcObject = stream
    videoElement.play()

    document.body.appendChild(videoElement)
  } catch (error) {
    console.error('Error accessing media devices:', error)
  }

  // To stop the media stream:
  // stream.getTracks().forEach((track) => track.stop())

  // To pause the media stream:
  // stream.getTracks().forEach((track) => track.enabled = false)

  // To resume the media stream:
  // stream.getTracks().forEach((track) => track.enabled = true)

  // To mute the audio track:
  // stream.getAudioTracks().forEach((track) => track.enabled = false)

  // To un-mute the audio track:
  // stream.getAudioTracks().forEach((track) => track.enabled = true)

  // To stop the video track:
  // stream.getVideoTracks().forEach((track) => track.stop())

  // To start the video track:
  // stream.getVideoTracks().forEach((track) => track.enabled = true)

  // To pause the video track:
  // stream.getVideoTracks().forEach((track) => track.enabled = false)

  // To resume the video track:
  // stream.getVideoTracks().forEach((track) => track.enabled = true)

  // To take a photo from the video stream:
  // const canvas = document.createElement('canvas')
  // canvas.width = videoElement.videoWidth
  // canvas.height = videoElement.videoHeight
  // canvas.getContext('2d').drawImage(videoElement, 0, 0, canvas.width, canvas.height)
  // const photo = canvas.toDataURL('image/png')

  // To record a video from the video stream:
  // const mediaRecorder = new MediaRecorder(stream)

  getMediaStream()
}
```

We can also use the `enumerateDevices` method to get a list of available media input and output devices:

```js
navigator.mediaDevices.enumerateDevices().then((devices) => {
  devices.forEach((device) => {
    console.log(device.kind, device.label)
  })
})
```

Even more, we can use the `getDisplayMedia` method to capture the contents of a user's screen:

```js
async function getDisplayMedia() {
  try {
    const stream = await navigator.mediaDevices.getDisplayMedia()

    const videoElement = document.createElement('video')
    videoElement.srcObject = stream
    videoElement.play()

    document.body.appendChild(videoElement)
  } catch (error) {
    console.error('Error accessing display media:', error)
  }

  getDisplayMedia()
}
```
