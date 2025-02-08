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

## Benefits of Promises Over Callbacks

- Promises are easier to read and write than callbacks.
- Promises can be chained together, making it easier to handle multiple asynchronous operations.
- Promises can be used to handle errors in a single place, rather than in each callback.
- Easier to write good functions
  - Each step doesn't have to be tied directly to the next step
  - With promises, `.then` method can just return value for next without having itself know what comes next

# Async/Await

`async` and `await` are language keywords for working with promises.

## `async`

`async` is syntactic sugar for creating promises.

- You can declare any function in JavaScript as `async`.
- In an `async` function, you write code that looks synchronous, but it's actually asynchronous.
- An `async` function will always return a promise.
- If the function returns a value, the promise will be resolved with that value.
- If the function throws an exception, the promise will be rejected with that exception.

```js
async function myFunction() {
  return 'Hello'
}

myFunction().then((value) => console.log(value))
```

## `await`

`await` is used to pause the execution of an `async` function until a promise is resolved.

- Inside an `async` function, we can use `await`.
- `await` can only be used inside an `async` function.
- `await` will pause the execution of the `async` function until the promise is resolved.
- Can `await` any promise, not just promises created with `async`.
- `await` waits for promises to resolve, but it doesn't block the event loop. And it evaluated to its resolved value.
- It then resumes execution
- Think of `await` as a pause button that waits for a promise to resolve.

```js
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

async function fetchPokemon() {
  const result = await fetch(`${BASE_URL}/1`)
  console.log(result)
}
```

(The first `await` will pause the function until the promise resolves. The function will then continue executing. The `await` expression evaluates to the resolved value of the promise.)

# More on Async/Await

We can await as many promises as we want in an `async` function.

```js
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

async function fetchFourPokemon() {
  const pokemon1 = await fetch(`${BASE_URL}/1`)
  console.log(pokemon1)

  const pokemon2 = await fetch(`${BASE_URL}/2`)
  console.log(pokemon2)

  const pokemon3 = await fetch(`${BASE_URL}/3`)
  console.log(pokemon3)

  const pokemon4 = await fetch(`${BASE_URL}/4`)
  console.log(pokemon4)
}
```

- This is all promise oriented, but it looks synchronous.

## Error Handling

- We can use `try` and `catch` blocks to handle errors in `async` functions.
- If a promise is rejected, the `await` expression will throw an error.
- We can catch this error with a `try` and `catch` block.

```js
async function fetchFakePromise() {
  try {
    const res = await fetch('http://fakeurl')
    console.log(res)
  } catch (err) {
    console.error(err)
  }
}
```

# Async Patterns: Parallel Async Operations

## Comparing Then/Catch and Async/Await

- Under the hood, `async`/`await` is just syntactic sugar for promises. They do the same thing.
- `async`/`await` is a easier modern way read and write than `.then`/`.catch`.
  - Code can be written more naturally, like synchronous code.
- There are a few cases where it's easy to deal with promises directly.
  - For example, when you need to run multiple promises in parallel.

## Async Patterns: Many Calls, Do Thing On Return & Don't Block

Need to make several async calls, then do something with the results as they come in.

```js
let results = []

fetch('url1')
  .then((res) => res.json())
  .then((data) => {
    results.push(data)
  })

fetch('url2')
  .then((res) => res.json())
  .then((data) => {
    results.push(data)
  })

fetch('url3')
  .then((res) => res.json())
  .then((data) => {
    results.push(data)
  })
```

## Async Patterns: Many Calls, in Sequence

Need to make several async calls, one-at-a-time, in order.

##### Using `.then`

```js
const results = []

fetch('url1')
  .then((res) => res.json())
  .then((data) => {
    results.push(data)

    return fetch('url2')
  })
  .then((res) => res.json())
  .then((data) => {
    results.push(data)

    return fetch('url3')
  })
  .then((res) => res.json())
  .then((data) => {
    results.push(data)
  })
```

##### Using `async`/`await`

```js
async function fetchThreePokemon() {
  const pokemon1 = await fetch(`${BASE_URL}/1`)
  const pokemon2 = await fetch(`${BASE_URL}/2`)
  const pokemon3 = await fetch(`${BASE_URL}/3`)

  const results = [pokemon1, pokemon2, pokemon3]
}
```

## Async Patterns: Many Calls, in Sequence (cont.)

- `Promise.all` accepts an array of promises and returns a single promise that resolves when all of the promises in the array have resolved.
- The new promise will resolve when every promise in the array has resolved, and will be rejected if any of the promises in the array are rejected.

```js
const fetches = [fetch('url1'), fetch('url2'), fetch('url3'), fetch('url4')]

Promise.all(fetches)
  .then((results) => {
    console.log(results)
  })
  .catch((err) => {
    console.error(err)
  })
```

or

```js
const fetches = [fetch('url1'), fetch('url2'), fetch('url3'), fetch('url4')]

try {
  const results = await Promise.all(fetches)
  console.log(results)
} catch (err) {
  console.error(err)
}
```

## Async Patterns: Many Calls, in Sequence (cont.)

- `Promise.allSettled` accepts an array of promises and returns a single promise that resolves when all of the promises in the array have settled (resolved or rejected).
- The new promise will resolve with an array of objects that each describe the outcome of each promise in the array.

```js
async function allSettledExample() {
  const BASE_URL = 'https://api.github.com/users'

  const elliePromise = fetch(`${BASE_URL}/ellie`)
  const joelPromise = fetch(`${BASE_URL}/joel`)
  const badPromise = fetch(`https://this-url-does-not-exist.com`)
  const coltPromise = fetch(`${BASE_URL}/colt`)
  const anotherBadPromise = fetch(`https://this-url-does-not-exist-either.com`)

  const results = await Promise.allSettled([
    elliePromise,
    joelPromise,
    badPromise,
    coltPromise,
    anotherBadPromise,
  ])

  console.log(results)
}
```

- `Promise.allSettled` returns an array of objects, each with a `status` property that is either `'fulfilled'` or `'rejected'`.
- If the promise was fulfilled, the object will have a `value` property with the resolved value.
- If the promise was rejected, the object will have a `reason` property with the rejection reason.

## Async Patterns: Many Calls, First One Wins

- `Promise.race` accepts an array of promises and returns a single promise that resolves or rejects as soon as one of the promises in the array resolves or rejects.
- The new promise will resolve with the value of the first promise to resolve, or reject with the reason of the first promise to reject.

```js
const fetches = [fetch('url1'), fetch('url2'), fetch('url3'), fetch('url4')]

Promise.race(fetches)
  .then((winner) => {
    console.log(winner)
  })
  .catch((err) => {
    console.error(err)
  })
```
