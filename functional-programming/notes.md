# Functional Programming Paradigm

## What is Functional Programming?

Functional programming (FP) is the process of building software by composing pure functions, avoiding shared state, mutable data, and side-effects. Functional programming is declarative rather than imperative, and application state flows through pure functions. Contrast with object oriented programming, where application state is usually shared and colocated with methods in objects.

- Functional programming is a declarative way of programming, and application state flows through pure functions.
- Functional programming is a style of programming that emphasizes the evaluation of expressions, rather than execution of commands.

- Contrast with object oriented programming, where application state is usually shared and colocated with methods in objects.

## Functional Programming Idioms

Functional programming methods you've likely encountered and should be familiar with include:

- map
- filter
- reduce
- some
- every
- find
- forEach

## Essential Concepts

- Higher-order functions, first-class functions
- Pure functions
- Immutability
- Closure
- Partial application/currying
- Function composition
- Recursion

## What Functional Programming Avoids

- Mutation
- Shared state
- Loops
- Side-effects
- Variable declarations

## Imperative vs Functional Programming

```js
// Imperative Programming
let sum = 0 // state

for (let i = 0; i < 10; i++) {
  sum += i
}

// Functional Programming
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const sum = numbers.reduce((acc, num) => acc + num, 0) // no state
```

- Imperative programming focuses on how to perform operations, while functional programming focuses on what operations to perform.
- Functional programming focuses on what needs to be done, rather than how to do it.

```js
// Imperative Programming
const numbers = [1, 2, 3, 4, 5]

const evens = numbers.filter((n) => n % 2 === 0)

// Functional Programming
numbers.filter((n) => n % 2 === 0)
```

```js
// Imperative Programming
let numbers = [1, 2, 3, 4, 5]
let max = numbers[0]

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i]
  }
}

// Functional Programming
Math.max(...numbers)
```

## First Class Functions

In functional programming, functions are first-class citizens, meaning they can be:

- Assigned to variables
- Passed as arguments to other functions
- Returned from other functions

```js
const func = function (person) {
  console.log(`Hello, ${person}!`)
}

const functions = [func, func]
```

## Pure Functions

A pure function is a function that:

- Given the same input, will always return the same output.
- The function cannot depend on any mutable state.- Produces no side effects.
- Produces no side effects.
- Side effects include:

  - Modifying any external variable or object property.
  - Logging to the console.
  - Writing to the screen.
  - Writing to a file.
  - Writing to the network.
  - Triggering any external process.
  - Calling any other functions with side-effects.

- Pure functions are deterministic.

```js
// Impure Function
let val = 2

function squareAndUpdateValue(n) {
  val = n * n
  return val
}
```

- This function is impure because it modifies the external variable `val`.

```js
// Pure Function
function square(n) {
  return n * n
}
```

- This function is pure because it does not modify any external state.

```js
const colors = ['red', 'green', 'blue']

// Impure Function
function addToArray(arr, val) {
  arr.push(val)
}
```

- This function is impure because it modifies the array `colors`.

```js
const colors = ['red', 'green', 'blue']

// Pure Function
function addToArray(arr, val) {
  return [...arr, val]
}
```

- This function is pure because it does not modify the array `colors`.
- Instead, it returns a new array with the new value added.
