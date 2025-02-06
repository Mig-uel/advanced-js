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

# Callback Hell & The Pyramid of Doom

## Callbacks for Asynchronicity

JavaScript is single-threaded, so it can't do two things at once.
By having a callback function for "once-async-thing-is-done", JavaScript can finish running your code as soon as possible. This way it can get to those other waiting tasks ASAP.

## Callback Patterns

Sequential callbacks can lead to hard-to-read code:

```js
import fs from 'fs'

fs.readFile('file1.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  fs.readFile('file2.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }

    fs.readFile('file3.txt', 'utf8', (err, data) => {
      if (err) {
        console.error(err)
        return
      }

      console.log(data)
    })
  })
})
```

This is often called "callback hell" or the "pyramid of doom".

You can flatten callback hell by using named functions:

````js
import fs from 'fs'

function handleFile1(err, data) {
  if (err) {
    console.error(err)
    return
  }

  fs.readFile('file2.txt', 'utf8', handleFile2)
}```
````

Each function needs to know what to do next; this makes writing independent functions difficult.
It can be particularly hard to handle errors in this pattern.

# Promises

Promises provide an alternate way to think about asynchronicity.
A promise is a one-time guarantee that a value will be available in the future.

```js
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'
const url = `${BASE_URL}/1`

fetch(url)
```

The `fetch` function returns a promise. This promise will resolve when the HTTP request is complete.

- Promises in JavaScript are objects that represent the eventual completion (or failure) of an asynchronous operation.
- They are native to the language as of ES6.
- A promise can be in one of three states:
  - `Pending`: Initial state, neither fulfilled nor rejected. It doesn't have a value yet.
  - `Fulfilled`: Operation completed successfully. It has successfully obtained a value.
  - `Rejected`: Operation failed. It failed to obtain a value for some reason.
  - The only way to access the resolved or rejected value is to chain a method onto the end of the promise (or `await` it).
