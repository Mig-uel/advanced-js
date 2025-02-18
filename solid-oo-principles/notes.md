## SOLID Object-Oriented Design Principles

SOLID is a set of five principles that help us design well-structured, maintainable, and scalable object-oriented software. These principles were introduced by Robert C. Martin in the early 2000s.

Who is Robert C. Martin? He is a software engineer and author of the book "Clean Code: A Handbook of Agile Software Craftsmanship".

### S - Single Responsibility Principle (SRP)

A class should have only one reason to change, meaning that a class should have only one job or responsibility.

```js
class User {
  constructor(name) {
    this.name = name
  }

  toJSON() {
    return JSON.stringify(this)
  }
}
```

In the example above, the `User` class has two responsibilities: storing the user's name and converting the user object to a JSON string. We can refactor the class to follow the SRP:

```js
class User {
  constructor(name) {
    this.name = name
  }
}

class UserSerializer {
  static toJSON(user) {
    return JSON.stringify(user)
  }
}
```

Another example:

```js
class User {
  constructor(username, password) {
    this.username = username
    this.password = password
  }

  // handles user authentication
  authenticate(inputPassword) {
    // imagine some authentication logic here
    return this.password === inputPassword
  }

  // saves the user to the database
  save() {
    // imagine some database logic here
    db.saveUser(this)
  }
}

const user = new User('john_doe', 'password')
if (user.authenticate('password')) {
  user.save()
}
```

In the example above, the `User` class has two responsibilities: user authentication and saving the user to the database. We can refactor the class to follow the SRP:

```js
class User {
  constructor(username, password) {
    this.username = username
    this.password = password
  }

  // handles user authentication
  authenticate(inputPassword) {
    // imagine some authentication logic here
    return this.password === inputPassword
  }
}

class UserDataManager {
  static save(user) {
    // assume this function gives a db connection
    const db = getDbConnection()
    db.saveUser(user)
  }
}

const user = new User('john_doe', 'password')
if (user.authenticate('password')) {
  UserDataManager.save(user)
}
```

In the refactored code, each class has a single responsibility: `User` class handles user authentication, and `UserDataManager` class saves the user to the database. Each class has only one reason to change.

### O - Open/Closed Principle (OCP)

A class should be open for extension but closed for modification. This means that we should be able to add new functionality to a class without modifying its existing code.

Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.

```js
class AreaCalculator {
  static calculate(shape) {
    if (shape.type === 'circle') {
      return Math.PI * shape.radius ** 2
    } else if (shape.type === 'square') {
      return shape.side ** 2
    }
  }

  static calculateAreas(shapes) {
    return shapes.reduce((prev, shape) => {
      return prev + AreaCalculator.calculate(shape)
    }, 0)
  }
}

const circle = { type: 'circle', radius: 5 }
const square = { type: 'square', side: 4 }
```

In the example above, the `AreaCalculator` class violates the OCP because we need to modify the class whenever we add a new shape type. We can refactor the class to follow the OCP:

```js
class Shape {
  area() {
    // override this method in subclasses
    throw new Error('area method must be implemented')
  }
}

class Circle extends Shape {
  constructor(radius) {
    super()
    this.radius = radius
  }

  area() {
    return Math.PI * this.radius ** 2
  }
}

class Square extends Shape {
  constructor(side) {
    super()
    this.side = side
  }

  area() {
    return this.side ** 2
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super()
    this.length = length
    this.width = width
  }

  area() {
    return this.length * this.width
  }
}

class AreaCalculator {
  static calculate(shape) {
    return shape.area()
  }

  static calculateAll(shapes) {
    return shapes.reduce((prev, shape) => {
      return prev + AreaCalculator.calculate(shape)
    }, 0)
  }
}

const circle = new Circle(5)
const square = new Square(4)
const rectangle = new Rectangle(3, 6)

AreaCalculator.calculate(circle) // 78.54
AreaCalculator.calculate(square) // 16
AreaCalculator.calculate(rectangle) // 18
AreaCalculator.calculateAll([circle, square, rectangle]) // 112.54
```

In the refactored code, the `AreaCalculator` class is open for extension because we can add new shape types by creating new subclasses of the `Shape` class. The `AreaCalculator` class is closed for modification because we don't need to modify its code when adding new shape types.

### L - Liskov Substitution Principle (LSP)

Objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program.

If `S` is a subtype of `T`, then objects of type `T` may be replaced with objects of type `S` without altering any of the desirable properties of the program.

```js
class Bird {
  fly() {
    console.log('This bird can fly')
  }
}

class Duck extends Bird {
  fly() {
    console.log('Duck can fly')
  }
}

class Eagle extends Bird {
  fly() {
    console.log('Eagle can fly')
  }
}

function makeBirdFly(bird) {
  bird.fly()
}

const duck = new Duck()
const eagle = new Eagle()

makeBirdFly(duck) // Duck can fly
makeBirdFly(eagle) // Eagle can fly
```

In the example above, the `makeBirdFly` function does not violate the LSP because we can replace the `Bird` object with its subclasses (`Duck` and `Eagle`) without affecting the correctness of the program.

### I - Interface Segregation Principle (ISP)

A client should not be forced to implement an interface that it does not use. Instead of one fat interface, many small interfaces are preferred based on groups of methods, each one serving one submodule.

JavaScript does not have interfaces like Java or TypeScript, but the principle still applies conceptually using duck typing (if it looks like a duck and quacks like a duck, it must be a duck) or optional methods.

```js
class Worker {
  work() {
    console.log('Working on work')
  }
  eat() {
    console.log('Eating some food')
  }
  sleep() {
    console.log('Sleeping')
  }
}

// function only needs the work method
function manageWork(worker) {
  worker.work()
}
```

In the example above, the `manageWork` function does not violate the ISP because it only needs the `work` method from the `Worker` class. The `Worker` class has three methods (`work`, `eat`, and `sleep`), but the `manageWork` function only uses the `work` method.
