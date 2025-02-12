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
