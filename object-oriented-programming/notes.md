# Object-Oriented Programming (OOP) in JavaScript

## Objects Review

Objects are a way to store data in key-value pairs. They are a way to group related data and functions together. Objects are created using curly braces `{}` and can be assigned to a variable.

- "Plain Old JavaScript Object" (POJO) - an object that does not have any special behavior or methods attached to it.

```js
let obj1 = {}
let obj2 = new Object()

obj1.name = 'John'
obj1['name'] = 'John'
```

- Keys are always strings, but you can access them using dot notation or bracket notation.
  - Dot notation is more common and easier to read.
    - `obj1.name`
  - Bracket notation is useful when the key is stored in a variable.
    - `obj1['name']`
- Values can be any data type, including other objects.
- Properties that do not exist on an object will return `undefined`.

