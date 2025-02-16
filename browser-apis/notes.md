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
