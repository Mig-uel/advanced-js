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
