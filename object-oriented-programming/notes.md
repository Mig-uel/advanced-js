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

- Constructors always return `undefined`.
- Constructors are optional. If you do not define a constructor, JavaScript will create an empty one for you.

## Bank Account Example

```js
class BankAccount {
  constructor(accountNumber, accountHolder, balance = 0) {
    this.accountNumber = accountNumber
    this.accountHolder = accountHolder
    this.balance = balance
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error('Invalid amount')
    }

    this.balance += amount

    return `Deposit successful. New balance: ${this.balance}`
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error('Invalid amount')
    } else if (amount > this.balance) {
      throw new Error('Insufficient funds')
    }

    this.balance -= amount

    return `Withdrawal successful. New balance: ${this.balance}`
  }
}

const account1 = new BankAccount('123abc', 'John Doe', 100)
account1.deposit(50) // 150
account1.withdraw(25) // 125
```

## Class Instance Methods

Class instance methods are methods that are called on an instance of a class. They are defined inside the class and are shared between all instances of the class.

- Instance methods are called on an instance of the class.
- Instance methods can access the properties of the instance using `this`.
- Instance methods can call other instance methods on the same instance.

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
triangle1.getArea() // 6
triangle1.getHypotenuse() // 5
```

## Class Inheritance

Inheritance is a way to create a new class based on an existing class. The new class inherits the properties and methods of the existing class.

- Inheritance is a way to create a new class based on an existing class.
- The new class is called a subclass or child class.
- The existing class is called a superclass or parent class.
- The subclass inherits the properties and methods of the superclass.
- The subclass can override the properties and methods of the superclass.

```js
class Shape {
  constructor(color) {
    this.color = color
  }

  getColor() {
    return this.color
  }
}

class Triangle extends Shape {
  constructor(color, a, b) {
    super(color)
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

const triangle1 = new Triangle('red', 3, 4)
triangle1.getColor() // red
triangle1.getArea() // 6
triangle1.getHypotenuse() // 5
```

- The `super` keyword is used to call the constructor of the superclass.
- The `super` keyword is used to call methods on the superclass.
- The subclass can override the properties and methods of the superclass.

## Static Properties

Static properties are properties that are shared between all instances of a class. They are defined on the class itself, not on the instances of the class.

- Static properties are defined using the `static` keyword.
- Static properties are shared between all instances of the class.

```js
class Cat {
  static species = 'felis catus'

  constructor(name, breed) {
    this.name = name
    this.breed = breed
  }
}

const cat1 = new Cat('Whiskers', 'Siamese')
Cat.species // felis catus
```

- Static properties are accessed using the class name, not the instance name.
- Static properties are shared between all instances of the class.

## Static Methods

Static methods are methods that are called on the class itself, not on an instance of the class. They are defined on the class itself, not on the instances of the class.

- Static methods are defined using the `static` keyword.
- Static methods are called on the class itself, not on an instance of the class.
- Static methods can access static properties of the class.

```js
class Cat {
  constructor(name, breed) {
    this.name = name
    this.breed = breed
  }

  static meow() {
    console.log(this)
    return 'Meow!'
  }
}

Cat.meow() // Meow!
```

- Static methods are called on the class itself, not on an instance of the class.
- Static methods can access static properties of the class.
- `this` inside a static method refers to the class itself, not an instance of the class.
- Almost every other OOP language more properly calls these "class methods" not "static methods" - since it does have access to the class itself.
- More consistent OOP languages like C++, Java, and Python, also have true static methods, where the method does not have access to the class itself.

## Getters

Getters are methods that are called when a property is accessed. They are defined using the `get` keyword.

- Getters are methods that are called when a property is accessed.
- Getters are defined using the `get` keyword.
- Getters are called without parentheses.
- Allow you to access a property as if it were a property, but it is actually a method.

```js
class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get area() {
    return Math.PI * this.radius ** 2
  }
}

const circle1 = new Circle(5)
circle1.area // 78.54
```

## Setters

Setters are methods that are called when a property is set. They are defined using the `set` keyword.

- Setters are methods that are called when a property is set.
- Setters are defined using the `set` keyword.
- Setters are called without parentheses.
- Allow you to set a property as if it were a property, but it is actually a method.

```js
class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get area() {
    return Math.PI * this.radius ** 2
  }

  set radius(value) {
    if (value <= 0) {
      throw new Error('Invalid radius')
    }

    this.radius = value
  }
}

const circle1 = new Circle(5)
circle1.radius = 10
```

## Public Fields

Public fields are properties that are defined outside of the constructor. They are defined using the `=` syntax.

- Public fields are properties that are defined outside of the constructor.
- Public fields are properties that are accessible from outside the class.
- Public fields are defined using the `=` syntax.
- Public fields are shared between all instances of the class.

```js
class Movie {
  title = 'Unknown'
  year = 2021
  rating

  constructor() {
    this.rating = 0
  }
}

const movie1 = new Movie()
movie1.title // Unknown
movie1.year // 2021
```

Benefits of public fields:

- Easier to read and write.
- Less boilerplate code.
- Shared between all instances of the class.

## Private Fields

Private fields are properties that are only accessible from inside the class. They are defined using the `#` syntax.

- Private fields are properties that are only accessible from inside the class.
- Private fields are defined using the `#` syntax.
- Private fields are not accessible from outside the class.
- Provides a way to encapsulate data and prevent it from being accessed from outside the class.

```js
class Circle {
  #radius

  constructor(radius) {
    this.#radius = radius
  }

  get radius() {
    return this.#radius
  }
}

const circle1 = new Circle(5)
circle1.#radius // SyntaxError
circle1.radius // 5
```

Benefits of private fields:

- Encapsulate data and prevent it from being accessed from outside the class.
- Prevent accidental modification of data.
- Improve code quality and maintainability.

## Private Methods

Private methods are methods that are only accessible from inside the class. They are defined using the `#` syntax.

- Private methods are methods that are only accessible from inside the class.
- Private methods are defined using the `#` syntax.
- Private methods are not accessible from outside the class.
- Provides a way to encapsulate functionality and prevent it from being accessed from outside the class.

```js
class MyClass {
  #privateMethod() {
    console.log('Private method')
  }

  publicMethod() {
    this.#privateMethod()
  }
}

const myClass = new MyClass()
myClass.#privateMethod() // SyntaxError
myClass.publicMethod() // Private method
```

Benefits of private methods:

- Encapsulate functionality and prevent it from being accessed from outside the class.
- Prevent accidental modification of data.
- Improve code quality and maintainability.

## Static Initialization Blocks

Static initialization blocks are blocks of code that are executed when a class is loaded. They are defined using the `static` keyword.

- Static initialization blocks are blocks of code that are executed when a class is loaded.
- Static initialization blocks are defined using the `static` keyword.
- Static initialization blocks are executed only once when the class is loaded.

```js
class DatabaseConnection {
  static connection

  static {
    if (process.env.NODE_ENV === 'production') {
      this.loadProductionConnection()
    } else {
      this.loadDevelopmentConnection()
    }
  }

  static loadProductionConnection() {}

  static loadDevelopmentConnection() {}
}
```

Benefits of static initialization blocks:

- Execute code when a class is loaded.
- Initialize static properties.
- Load configuration settings.
