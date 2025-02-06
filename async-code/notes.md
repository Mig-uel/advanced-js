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
