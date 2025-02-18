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

## Mixing Data and Functions in Objects

Objects can store data and functions together. Functions stored on an object are called methods.

Using a POJO:

- Data is stored in key-value pairs.
- Related functionality is stored together.
- Annoying when we have to create multiple objects with the same properties and methods.
  - Difficult to maintain and update.
  - If we have 1000 objects, we have to update 1000 objects.

```js
// Plain Old JavaScript Object (POJO)
let myTriangle = {
  a: 3,
  b: 4,

  // Method
  getArea: function () {
    return 0.5 * this.a * this.b
  },

  getHypotenuse: function () {
    return Math.sqrt(this.a ** 2 + this.b ** 2)
  },
}

console.log(myTriangle.getArea()) // 6
```

- `this` refers to the object that the method is called on.
- Arrow functions do not have their own `this` context, so they are not suitable for object methods.

## Classes

Classes are a way to create objects with shared properties and methods. Classes are a blueprint for creating objects. They are a way to create objects with the same properties and methods.

- Classes are created using the `class` keyword.
- Class names are capitalized by convention. It is a way to distinguish classes from regular objects.
- Classes have a `constructor` method that is called when a new object is created.
- The `constructor` method is used to set up the initial state of the object.
- Methods are defined inside the class using the `method` syntax.
- Methods are shared between all objects created from the class.

```js
class Triangle {
  constructor(a, b) {
    this.a = a
    this.b = b
  }

  getArea() {
    return 0.5 * (this.a * this.b)
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2)
  }
}

const triangle1 = new Triangle(3, 4)
```

- We instantiate a class using the `new` keyword.
- The `new` keyword creates a new object and calls the `constructor` method.
- The `new` keyword creates a new instance of the class.
- We can still add properties and methods to individual instances of the class.
- We can determine the type of an object using the `instanceof` operator.

```js
console.log(triangle1 instanceof Triangle) // true
```

## What Can You Do In The Constructor?

- Set up the initial state of the object.
- Assign properties to the object.
- Call methods on the object.
- Create new objects and assign them to properties.
- Validate the input to the constructor.

```js
constructor(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new Error('Invalid input')
  }

  this.a = a
  this.b = b
}
```
