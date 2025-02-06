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

## `.then` and `.catch`

- Promises provide a `.then` and `.catch` method to handle the result of the promise. Both of these accept a callback function.
- The callback passed to the `.then` method will run if the promise is resolved, and has access to the promise's resolved value.

```js
fetch(url).then((res) => res.json())
```

- The callback passed to the `.catch` method will run if the promise is rejected, and typically has access to the error that caused the rejection.

```js
fetch(url)
  .then((res) => res.json())
  .catch((err) => console.error(err))
```

## Chaining Promises

```js
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

// make request to pokemon/1
fetch(`${BASE_URL}/1`)
  .then((res1) => {
    console.log('RESPONSE 1', res1)

    // then make request to pokemon/2
    fetch(`${BASE_URL}/2`)
      .then((res2) => {
        console.log('RESPONSE 2', res2)

        // then make request to pokemon/3
        fetch(`${BASE_URL}/3`)
          .then((res3) => {
            console.log('RESPONSE 3', res3)

            // then make request to pokemon/4
            fetch(`${BASE_URL}/4`)
              .then((res4) => {
                console.log('RESPONSE 4', res4)
              })
              .catch((err) => console.error(err))
          })
          .catch((err) => console.error(err))
      })
      .catch((err) => console.error(err))
  })
  .catch((err) => console.error(err))
```

This is a better pattern than callback hell, but it's still not ideal.

- When calling `.then` on a promise, it can return a _new_ promise in a callback.
  - Can chain asynchronous operations/promises together without nesting and with `.then` calls
- We only need one `.catch` at the end to handle any errors in the chain — don't have to catch every promise.

```js
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

fetch(`${BASE_URL}/1`)
  .then((res1) => {
    console.log('RESPONSE 1', res1)

    return fetch(`${BASE_URL}/2`)
  })
  .then((res2) => {
    console.log('RESPONSE 2', res2)

    return fetch(`${BASE_URL}/3`)
  })
  .then((res3) => {
    console.log('RESPONSE 3', res3)

    return fetch(`${BASE_URL}/4`)
  })
  .then((res4) => {
    console.log('RESPONSE 4', res4)
  })
  .catch((err) => console.error(err))
```
