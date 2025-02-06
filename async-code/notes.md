# Callbacks

A callback is a function passed to another function, for it to call
when it's done.

- Useful for separating processing patterns from business logic

```js
const numbers = [1, 2, 3, 4, 5]

const evenNumbers = numbers.filter((number) => number % 2 === 0)
```

## Event Driven Programming

Register a function to be called when an event happens.

```js
const button = document.querySelector('button')

button.addEventListener('click', () => {
  console.log('Button clicked')
})
```

## Asynchronous Programming

Call those callback functions when asynchronous operation completes.

```js
function printHello() {
  console.log('Hello')
}

setTimeout(printHello, 3000)
```

## Callbacks Will Always Be Useful

First two cases will always be done with callbacks:

- Functional programming patterns
- Event driven programming