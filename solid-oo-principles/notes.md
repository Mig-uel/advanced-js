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

### D - Dependency Inversion Principle (DIP)

High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions.

High-level modules (main application logic) should not depend directly on low-level modules (like specific tools or libraries). Instead, both should depend on abstractions (interfaces or abstract classes).

JavaScript Example:

Imagine you're building an application where users can sign in. Initially, users sign in using email and password.
But in the future, you want to add the ability to sign in using Google, Facebook, or other social media accounts.
If you tightly couple the sign-in logic with the email and password, you'll have to modify the sign-in logic whenever you add a new sign-in method.

```js
class UsernamePasswordAuth {
  authenticate(username, password) {
    // authenticate using username and password
  }
}

class User {
  login(user, password) {
    const auth = new UsernamePasswordAuth()
    return auth.authenticate(user, password)
  }
}
```

In the example above, the `User` class violates the DIP because it depends on the `UsernamePasswordAuth` class directly. We can refactor the code to follow the DIP:

You create an abstract AuthMethod class and ensure that your main User class depends on this abstraction, not a specific implementation. This way, adding a new authentication method (like Google or Facebook) won't require modifying the User class.

```js
// abstract authentication method
class AbstractAuthMethod {
  authenticate(credentials) {
    throw new Error('authenticate method must be implemented')
  }
}

class UsernamePasswordAuth extends AbstractAuthMethod {
  authenticate({ username, password }) {
    // authenticate using username and password
  }
}

class GoogleAuth extends AbstractAuthMethod {
  authenticate({ email, token }) {
    // authenticate using Google token
  }
}

class User {
  constructor(authMethod) {
    if (!(authMethod instanceof AbstractAuthMethod))
      throw new Error('authMethod must be an instance of AbstractAuthMethod')

    this.authMethod = authMethod
  }

  login(credentials) {
    return this.authMethod.authenticate(credentials)
}

const user = new User(new UsernamePasswordAuth())
user.login({ username: 'john_doe', password: 'password' })
```

In the refactored code, the `User` class depends on the `AbstractAuthMethod` abstraction, not a specific implementation. This way, you can add new authentication methods (like Google or Facebook) without modifying the `User` class.

By using DIP in our authentication example, the User class doesn't need to change every time we introduce a new way to authenticate. We just create a new class extending AbstractAuthMethod and pass it to the User class. This abstraction ensures that our main logic remains stable and unaffected by changes in lower-level modules (different authentication mechanism).

## Law of Demeter (LoD)

The Law of Demeter (LoD) is a design guideline for developing software that aims to reduce coupling between classes. It states that a module should not know about the internal details of the objects it manipulates. Instead, it should only interact with its immediate friends.

The main idea is to ensure that our objects don't reveal too much about their structure or their collaborators' structures. This helps to reduce the complexity of our code and makes it easier to maintain and extend.

The Law of Demeter is often summarized as "talk only to your immediate friends." In other words, an object should only call methods on:

- Itself
- Its parameters
- Objects it creates
- Its direct component objects

Consider a scenario where cats have a favorite toy and each toy has a color.
If someone wants to know about the color of the cat's favorite toy, it would be inappropriate for them to directly inquire about the toy's color from the cat object.

```js
class Wallet {
  constructor(money) {
    this.money = money
  }

  getMoney() {
    return this.money
  }
}

const Person {
  constructor(wallet) {
    this.wallet = wallet
  }

  getWallet() {
    return this.wallet
  }
}

class ShoppingMall {
  chargeCustomer(person, amount) {
    const wallet = person.getWallet()
    const money = wallet.getMoney()

    wallet.money = money - amount // this is a violation of the Law of Demeter
  }
}

let wallet = new Wallet(100)
let person = new Person(wallet)
let mall = new ShoppingMall()

mall.chargeCustomer(person, 50)
```

In the example above, the `ShoppingMall` class violates the Law of Demeter because it directly accesses the `money` property of the `Wallet` object through the `Person` object. Instead, the `ShoppingMall` class should only interact with its immediate friends (its parameters).

We can refactor the code to follow the Law of Demeter:

```js
class Wallet {
  constructor(money) {
    this.money = money
  }

  debit(amount) {
    this.money -= amount
  }

  getMoney() {
    return this.money
  }
}

class Person {
  constructor(wallet) {
    this.wallet = wallet
  }

  pay(amount) {
    this.wallet.debit(amount)
  }
}

class ShoppingMall {
  chargeCustomer(person, amount) {
    person.pay(amount)
  }
}

let wallet = new Wallet(100)
let person = new Person(wallet)
let mall = new ShoppingMall()

mall.chargeCustomer(person, 50)
```

In the refactored code, the `ShoppingMall` class no longer violates the Law of Demeter because it only interacts with its immediate friends (the `Person` object). The `Person` object, in turn, interacts with its immediate friend (the `Wallet` object) to perform the required operation.

By following the Law of Demeter, we can reduce the coupling between classes and make our code more maintainable and easier to understand.
