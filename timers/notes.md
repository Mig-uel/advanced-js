# Timers: Debouncing, Throttling, and RequestAnimationFrame

## setTimeout

`setTimeout` is a method that executes a function after a specified amount of time. It returns a unique identifier that can be used to clear the timeout.

- It executes a function after waiting a specified number of milliseconds.

```javascript
const myTimeout = setTimeout(() => {
  console.log('Hello, world!')
}, 2000)
```
