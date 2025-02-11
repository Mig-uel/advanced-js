# Recap of Var, Let, Const And Scope

## Var

- `var` is function scoped
- `var` is hoisted
- `var` can be re-declared

```js
var color = 'red'

function foo() {
  if (true) {
    var x = 10
  }
  console.log(x) // 10
}

if (true) {
  var y = 20
}

console.log(color) // red
console.log(y) // 20
console.log(x) // ReferenceError: x is not defined
```

## Let and Const

- `let` and `const` are block scoped
- `let` and `const` are not hoisted and are in the Temporal Dead Zone (TDZ) and are not added to the global or window object
- `let` and `const` cannot be re-declared

```js
let color = 'red'

function foo() {
  if (true) {
    let x = 10
  }
  console.log(x) // ReferenceError: x is not defined
}

if (true) {
  const y = 20
}

console.log(color) // red
console.log(y) // ReferenceError: y is not defined
console.log(x) // ReferenceError: x is not defined
```

## Scope And Closures

- Scope is the context in which a variable is declared.
- First, the JavaScript engine looks for a variable in the current scope (local scope), then it looks in the parent scope (outer scope), and so on until it reaches the global scope.
- If the variable is not found in any of the scopes, a ReferenceError is thrown.
- Closures are functions that have access to variables from another function's scope

```js
let x = 15

function outer() {
  let x = 10

  function inner() {
    console.log(x)
  }
  inner()
}

let foo = outer
foo() // 10
```

## Static Scope

- JavaScript uses Lexical Scoping (Static Scope)
- Lexical Scoping means that the scope of a variable is determined by its position in the source code
- Lexical Scoping allows a function to access variables from its parent scope even after the parent function has finished executing
- Other languages like C, Java, and Ruby use Dynamic Scoping
- In Dynamic Scoping, the scope of a variable is determined by the calling context
- However, JavaScript uses Lexical Scoping which means that the scope of a variable is determined by its position in the source code

```js
let animal = 'whale'

function printAnimal() {
  console.log(animal)
}

function alsoPrintAnimal() {
  let animal = 'elephant'

  printAnimal()
}

printAnimal() // whale
alsoPrintAnimal() // whale
```

## Hoisting

- Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope before code execution
- Only the declarations are hoisted, not the initializations
- `var` is hoisted but `let` and `const` are not hoisted
  - `var` variable is legal but `undefined` until the code is executed

```js
console.log(food) // undefined
var food = 'pizza'
```

```js
function blah() {
  console.log(color)
}

blah() // ReferenceError: color is not defined

function blah() {
  console.log(color)
  var color = 'red'
}

blah() // undefined
```

```js
function blah() {
  // Temporal Dead Zone (TDZ)
  console.log(color) // ReferenceError: Cannot access 'color' before initialization

  let color = 'red'
  // TDZ ends here
}
```

## Temporal Dead Zone (TDZ)

- Temporal Dead Zone (TDZ) is the time between the creation of a variable and its initialization
- During the TDZ, the variable is in an uninitialized state and cannot be accessed
- Accessing a variable in the TDZ results in a ReferenceError

```js
console.log(color) // ReferenceError: Cannot access 'color' before initialization

let color = 'red'
```

# IIFE (Immediately Invoked Function Expression)

- IIFE is a function that is executed immediately after it is created
- IIFE is used to create a new scope for variables and functions
- IIFE is used to avoid polluting the global scope

```js
;(function () {
  let x = 10
  console.log(x)
})()
```

# Closures

- A closure is a function that has access to variables from another function's scope
- A closure has access to its own scope, the outer function's scope, and the global scope
- A closure has access to the outer function's variables even after the outer function has finished executing
- Closures are used to create private variables and functions
- The ability for inner functions to remember and access variables defined in outer functions, even after they have finished executing, is called closure

```js
function outerFunc() {
  let outerVar = 'I am from outer function' // outer variable

  function innerFunc() {
    console.log('I am from inner function')
    console.log('outerVar: ', outerVar) // inner function accessing outer variable
  }

  return innerFunc // returning inner function
}

const closure = outerFunc() // outer function is executed and inner function is returned
closure() // I am from inner function, outerVar: I am from outer function
```

- In the above example, `innerFunc` is a closure because it has access to the `outerVar` variable from the `outerFunc` function
- Even after the `outerFunc` function has finished executing, the `innerFunc` function still has access to the `outerVar` variable
- This is because the `innerFunc` function has a reference to the `outerVar` variable in its closure

```js
function idGenerator() {
  let count = 1

  return function generate() {
    return count++
  }
}

const generateId = idGenerator()

console.log(generateId()) // 1
console.log(generateId()) // 2
console.log(generateId()) // 3
```

- In the above example, the `idGenerator` function returns a function called `generate` which generates a unique id each time it is called
- The `generate` function has access to the `count` variable from the `idGenerator` function
- The `count` variable is incremented each time the `generate` function is called
- This is an example of a closure where the `generate` function has access to the `count` variable from the `idGenerator` function

# Closures (cont.)

- Closures are used to create private variables and functions
- Closures are used to create factory functions
- Closures are used to create modules

```js
function createCounter() {
  let count = 0

  return {
    increment() {
      return count++
    },
    decrement() {
      return count--
    },
    getCount() {
      return count
    },
  }
}

const counter = createCounter()

console.log(counter.increment()) // 0
console.log(counter.increment()) // 1
console.log(counter.decrement()) // 0
console.log(counter.getCount()) // 0
```

- In the above example, the `createCounter` function returns an object with three methods: `increment`, `decrement`, and `getCount`
- The `increment` method increments the `count` variable
- The `decrement` method decrements the `count` variable
- The `getCount` method returns the `count` variable
- The `count` variable is private and cannot be accessed directly from outside the `createCounter` function
- This is an example of a closure where the `increment`, `decrement`, and `getCount` methods have access to the `count` variable from the `createCounter` function

# Closures (Factory Functions)

- Closures are used to create factory functions
- Factory functions are functions that return objects
- Factory functions are used to create multiple instances of objects

```js
function createExponentFunction(exponent) {
  return function (val) {
    return val ** exponent
  }
}

const square = createExponentFunction(2)
const cube = createExponentFunction(3)

console.log(square(2)) // 4
console.log(cube(2)) // 8
```

- In the above example, the `createExponentFunction` function returns a function that calculates the exponent of a given value
- The `square` function calculates the square of a given value
- The `cube` function calculates the cube of a given value
- The `square` and `cube` functions have access to the `exponent` variable from the `createExponentFunction` function
- This is an example of a closure where the `square` and `cube` functions have access to the `exponent` variable from the `createExponentFunction` function

```js
function uniqueIdGenerator(prefix) {
  let id = 0

  return function () {
    id++
    return `${prefix}-${id}`
  }
}

const generateUserId = uniqueIdGenerator('user')

console.log(generateUserId()) // user-1
console.log(generateUserId()) // user-2
console.log(generateUserId()) // user-3
```

- In the above example, the `uniqueIdGenerator` function returns a function that generates a unique id with a given prefix
- The `generateUserId` function generates a unique user id with the prefix `user`
- The `generateUserId` function has access to the `id` variable from the `uniqueIdGenerator` function
- This is an example of a closure where the `generateUserId` function has access to the `id` variable from the `uniqueIdGenerator` function

# Closures (Event Listeners)

- Closures are used to create event listeners
- Event listeners are functions that are executed when a specific event occurs
- Event listeners are used to handle user interactions

```js
document.querySelector('button').addEventListener(
  'click',
  (function () {
    let count = 0

    return function () {
      count++
      console.log(`Button clicked ${count} times`)
    }
  })()
)
```

- In the above example, an event listener is added to a button element
- The event listener is an IIFE that returns a function that increments a `count` variable each time the button is clicked
- The `count` variable is private and cannot be accessed directly from outside the event listener
- This is an example of a closure where the event listener has access to the `count` variable

```js
function createCounter(id) {
  let count = 0
  const button = document.getElementById(id)

  button.addEventListener('click', function () {
    count++
    button.innerText = `Clicked ${count} times`
  })
}

createCounter('button1')
createCounter('button2')

// Two buttons with independent counters
```

# Closures (Loops)

- In older versions of JavaScript, closures were often used to solve the problem of variables in loops
- In ES6, the `let` keyword was introduced which solves this problem

```js
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i)
  }, 1000)
}

// 3 3 3
``

- In the above example, the `setTimeout` function is called three times with a delay of 1 second
- The `setTimeout` function logs the value of the `i` variable after 1 second
- The `i` variable is declared with the `var` keyword which is function-scoped
- The `i` variable is incremented to 3 in the loop and the `setTimeout` function logs the value of `i` after 1 second
- Since the `i` variable is function-scoped, the value of `i` is 3 when the `setTimeout` function is executed
- As a result, the `setTimeout` function logs `3` three times

```js
for (var i = 0; i < 6; i++) {
  ;(function (j) {
    setTimeout(function () {
      console.log(j)
    }, 1000)
  })(i)
}
```

- In the above example, the `setTimeout` function is called six times with a delay of 1 second
- The `setTimeout` function logs the value of the `j` variable after 1 second
- The `j` variable is passed as an argument to an IIFE which creates a new scope for each iteration of the loop
- The `j` variable is incremented to `i` in the loop and the `setTimeout` function logs the value of `j` after 1 second
- Since the `j` variable is block-scoped, the value of `j` is `0`, `1`, `2`, `3`, `4`, `5` when the `setTimeout` function is executed
- As a result, the `setTimeout` function logs `0`, `1`, `2`, `3`, `4`, `5` after 1 second
