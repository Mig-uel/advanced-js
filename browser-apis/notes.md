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

## Intersection Observer API

The Intersection Observer API allows you to observe changes in the intersection of a target element with an ancestor element or the viewport. It is commonly used for lazy loading images, infinite scrolling, and tracking the visibility of elements on the page.

- Provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with the viewport

```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log('Element is in view:', entry.target)
    } else {
      console.log('Element is out of view:', entry.target)
    }
  })
})

const targetElement = document.querySelector('.target-element')
observer.observe(targetElement)
```

We can also configure the observer with options such as `root`, `rootMargin`, and `threshold`:

```js
const options = {
  root: document.querySelector('.container'),
  rootMargin: '0px',
  threshold: 0.5,
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log('Element is in view:', entry.target)
    } else {
      console.log('Element is out of view:', entry.target)
    }
  })
}, options)

const targetElement = document.querySelector('.target-element')
observer.observe(targetElement)
```

- `root`: The element that is used as the viewport for checking visibility of the target. Defaults to the browser viewport if not specified.
- `rootMargin`: Margin around the root element. Can have values similar to the CSS margin property, e.g., '10px 20px 30px 40px'. Defaults to '0px'.
- `threshold`: A single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. Defaults to 0.
  - If you only want to detect when visibility passes the 50% mark, you can use a value of 0.5.
  - If you want to detect when visibility passes the 25%, 50%, 75%, and 100% marks, you can use an array of [0, 0.25, 0.5, 0.75, 1].

## Performance API

The Performance API provides access to performance-related information for the current page. It is commonly used to measure the performance of web applications and identify areas for optimization.

- Allows you to measure the performance of web applications

```js
const performanceEntries = performance.getEntriesByType('resource')

performanceEntries.forEach((entry) => {
  console.log(entry.name, entry.duration)
})
```

We can also use the `PerformanceObserver` interface to observe performance entries:

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry.name, entry.duration)
  })
})

observer.observe({ entryTypes: ['resource'] })
```

We can set up markers to measure the time between two points in the code:

```js
performance.mark('start')

// Code to measure

performance.mark('end')
performance.measure('start to end', 'start', 'end')

const measureEntries = performance.getEntriesByName('start to end')
measureEntries.forEach((entry) => {
  console.log(entry.name, entry.duration)
})
```

There are different types of performance entries such as `navigation`, `resource`, `paint`, `mark`, `measure`, and `longtask`.

```js
const navigationEntries = performance.getEntriesByType('navigation')
const resourceEntries = performance.getEntriesByType('resource')
const paintEntries = performance.getEntriesByType('paint')
const markEntries = performance.getEntriesByType('mark')
const measureEntries = performance.getEntriesByType('measure')
const longtaskEntries = performance.getEntriesByType('longtask')

window.addEventListener('load', () => {
  resourceEntries
    .filter((entry) => entry.initiatorType === 'img')
    .forEach((entry) => {
      console.log(entry.name, entry.duration)
    })
})
```

- `navigation`: Performance entries related to the navigation of the document.
- `resource`: Performance entries related to resources such as images, scripts, and stylesheets.
- `paint`: Performance entries related to paint events such as first paint and first contentful paint.
- `mark`: Performance entries related to marks set by the developer.
- `measure`: Performance entries related to measures set by the developer.
- `longtask`: Performance entries related to long tasks that block the main thread.

## Web Audio API

The Web Audio API provides a powerful and versatile system for controlling audio on the web. It is commonly used for audio processing, synthesis, and visualization.

- Allows for the processing and synthesis of audio in web applications

```js
const audioContext = new AudioContext()
const oscillator = audioContext.createOscillator()

oscillator.type = 'sine'
oscillator.frequency.setValueAtTime(440, audioContext.currentTime)
oscillator.connect(audioContext.destination)
oscillator.start()

oscillator.stop(audioContext.currentTime + 1)
```

We can also create audio buffers from audio files:

```js
async function loadAudio(url) {
  const response = await fetch(url)
  const arrayBuffer = await response.arrayBuffer()
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer)

  return audioBuffer
}

loadAudio('audio.mp3')
  .then((audioBuffer) => {
    const source = audioContext.createBufferSource()
    source.buffer = audioBuffer
    source.connect(audioContext.destination)
    source.start()
  })
  .catch((error) => {
    console.error('Error loading audio:', error)
  })

// To stop the audio source:
// source.stop()
```

## Canvas API

The Canvas API provides a way to draw graphics on the web using JavaScript. It is commonly used for games, animations, and data visualization.

- Enables drawing graphics on the web using JavaScript and the HTML `<canvas>` element

```js
const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

context.fillStyle = 'red'
context.fillRect(10, 10, 100, 100)
```
