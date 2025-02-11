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
