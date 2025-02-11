# Timers: Debouncing, Throttling, and RequestAnimationFrame

## setTimeout

`setTimeout` is a method that executes a function after a specified amount of time. It returns a unique identifier that can be used to clear the timeout.

- It executes a function after waiting a specified number of milliseconds.

```javascript
const myTimeout = setTimeout(() => {
  console.log('Hello, world!')
}, 2000)
```

## clearTimeout

`clearTimeout` is a method that stops the timeout execution set by `setTimeout`.

- Clears a timeout set by `setTimeout`, stopping the function from executing.

```javascript
clearTimeout(myTimeout)
```

## setInterval

`setInterval` is a method that executes a function repeatedly after a specified amount of time. It returns a unique identifier that can be used to clear the interval.

- It executes a function repeatedly, with a fixed time delay between each call to that function.

```javascript
const myInterval = setInterval(() => {
  console.log('This will log every 2 seconds')
}, 2000)
```

## clearInterval

`clearInterval` is a method that stops the interval execution set by `setInterval`.

- Clears an interval set by `setInterval`, stopping the function from executing further.

```javascript
clearInterval(myInterval)
```
