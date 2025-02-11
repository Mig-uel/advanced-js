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
