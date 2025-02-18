# Object-Oriented Programming (OOP) Under The Hood

JavaScript did not always have classes. It was introduced in ES6 (ECMAScript 2015). Before ES6, JavaScript used prototype-based inheritance.

Prototype-based inheritance is a style of object-oriented programming in which classes are not present and behavior reuse (inheritance) is performed via a process of cloning existing objects that serve as prototypes.

In JavaScript, every object has a prototype. When a method or property is called on an object, JavaScript will first look for that method or property on the object itself. If it doesn't find it, it will look for it on the object's prototype. If it doesn't find it there, it will look for it on the prototype's prototype, and so on, until it reaches the end of the prototype chain.

Syntactic sugar is a syntax within a programming language that is designed to make things easier to read or to express. Classes in JavaScript are syntactic sugar for prototype-based inheritance.

## The _new_ Keyword

When a function is invoked with the _new_ keyword, it is called a constructor function. The _new_ keyword creates a new object and sets the _this_ keyword to that object. It then returns the object.

The _new_ keyword does four things:

- It creates a new object.
- It sets the _this_ keyword to the new object.
- It adds a _prototype_ property to the new object that points to the constructor function's prototype.
- It returns the new object.

Before ES6, classes were created using constructor functions. Constructor functions are functions that are used to create objects. They are named with a capital letter by convention.

```javascript
// Constructor function
function Dog(name, breed) {
  this.name = name
  this.breed = breed
}

// Create a new object using the constructor function
const buddy = new Dog('Buddy', 'Golden Retriever') // { name: 'Buddy', breed: 'Golden Retriever' }

function User(name, email) {
  this.name = name
  this.email = email
  this.isAdmin = false
}

const user = new User('John Doe', 'john@email.com') // { name: 'John Doe', email: 'john@email.com', isAdmin: false }'
```

In the example above, the _Dog_ and _User_ functions are constructor functions. When they are invoked with the _new_ keyword, they create new objects. The _this_ keyword is set to the new object, and the properties are added to the object. The _prototype_ property of the new object points to the constructor function's prototype. The new object is then returned.

## Prototypes

Every JavaScript object has a prototype. A prototype is also an object. All JavaScript objects inherit their properties and methods from their prototype.

When a method or property is called on an object, JavaScript will first look for that method or property on the object itself. If it doesn't find it, it will look for it on the object's prototype. If it doesn't find it there, it will look for it on the prototype's prototype, and so on, until it reaches the end of the prototype chain.

The _prototype_ property of a constructor function is an object that is used to share properties and methods among all instances created with that constructor function.

```javascript
function Dog(name, breed) {
  this.name = name
  this.breed = breed

  this.bark = function () {
    return `${this.name} barks!`
  }

  this.sleep = function () {
    return `${this.name} is sleeping...`
  }
}

const buddy = new Dog('Buddy', 'Golden Retriever') // { name: 'Buddy', breed: 'Golden Retriever', bark: [Function], sleep: [Function] }

const max = new Dog('Max', 'Labrador') // { name: 'Max', breed: 'Labrador', bark: [Function], sleep: [Function] }

buddy.bark() // 'Buddy barks!'
max.bark() // 'Max barks!'
```

In the example above, the _bark_ and _sleep_ methods are added to the _Dog_ constructor function. When a new object is created using the _Dog_ constructor function, the _bark_ and _sleep_ methods are added to the object. This is not ideal because each object has its own copy of the _bark_ and _sleep_ methods, which is inefficient.

To share methods among all instances created with the _Dog_ constructor function, we can add the methods to the _Dog_ constructor function's prototype.

```javascript
function Dog(name, breed) {
  this.name = name
  this.breed = breed
}

Dog.prototype.bark = function () {
  return `${this.name} barks!`
}

Dog.prototype.sleep = function () {
  return `${this.name} is sleeping...`
}

const buddy = new Dog('Buddy', 'Golden Retriever') // { name: 'Buddy', breed: 'Golden Retriever' }

const max = new Dog('Max', 'Labrador') // { name: 'Max', breed: 'Labrador' }

buddy.bark() // 'Buddy barks!'
max.bark() // 'Max barks!'

buddy.bark === max.bark // true
```

In the example above, the _bark_ and _sleep_ methods are added to the _Dog_ constructor function's prototype. When a new object is created using the _Dog_ constructor function, the _bark_ and _sleep_ methods are shared among all instances created with the _Dog_ constructor function.

Prototypes are the basic mechanism that gives JavaScript objects the ability to inherit from other objects.

The constructor found in an object's prototype is the constructor that was used to create the object.

```javascript
function Dog(name, breed) {
  this.name = name
  this.breed = breed
}

const buddy = new Dog('Buddy', 'Golden Retriever') // { name: 'Buddy', breed: 'Golden Retriever' }

buddy.constructor === Dog // true

const max = new buddy.constructor('Max', 'Labrador') // { name: 'Max', breed: 'Labrador' }
```

In the example above, the _constructor_ property of the _buddy_ object points to the _Dog_ constructor function. We can use the _constructor_ property to create new objects using the same constructor function.

## The Prototype Chain

The prototype chain is a series of objects connected by their prototypes. When a method or property is called on an object, JavaScript will first look for that method or property on the object itself. If it doesn't find it, it will look for it on the object's prototype. If it doesn't find it there, it will look for it on the prototype's prototype, and so on, until it reaches the end of the prototype chain.

```javascript
const grandparent = {
  greet() {
    return 'Hello!'
  },
}

const parent = {
  color: 'red',
  sing() {
    return 'La la la...'
  },
  __proto__: grandparent,
}

const child = {
  num: 2,
  __proto__: parent,
}

child.color // 'red'
child.sing() // 'La la la...'
child.greet() // 'Hello!'
```

In the example above, the _child_ object has a prototype chain that includes the _parent_ and _grandparent_ objects. When a property or method is called on the _child_ object, JavaScript will first look for it on the _child_ object itself. If it doesn't find it, it will look for it on the _parent_ object. If it doesn't find it there, it will look for it on the _grandparent_ object.

## Classes, Inheritance, and Prototypes

Classes in JavaScript are syntactic sugar for prototype-based inheritance. Under the hood, classes are still using prototypes.

When a class is defined, JavaScript creates a constructor function and adds methods to the constructor function's prototype.

```javascript
class Dog {
  constructor(name, breed) {
    this.name = name
    this.breed = breed
  }

  bark() {
    return `${this.name} barks!`
  }

  sleep() {
    return `${this.name} is sleeping...`
  }
}

const buddy = new Dog('Buddy', 'Golden Retriever') // { name: 'Buddy', breed: 'Golden Retriever' }

const max = new Dog('Max', 'Labrador') // { name: 'Max', breed: 'Labrador' }

buddy.bark() // 'Buddy barks!'
max.bark() // 'Max barks!'
```

In the example above, the _Dog_ class is defined with a constructor and two methods. When the _Dog_ class is defined, JavaScript creates a constructor function and adds the _bark_ and _sleep_ methods to the constructor function's prototype.

Classes can also extend other classes. When a class extends another class, JavaScript
creates a constructor function for the subclass and sets the subclass's prototype to an instance of the superclass.

```javascript
class Animal {
  constructor(name) {
    this.name = name
  }

  speak() {
    return `${this.name} makes a noise.`
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name)
    this.breed = breed
  }

  bark() {
    return `${this.name} barks!`
  }
}

const buddy = new Dog('Buddy', 'Golden Retriever') // { name: 'Buddy', breed: 'Golden Retriever' }

buddy.bark() // 'Buddy barks!'
buddy.speak() // 'Buddy makes a noise.'
```

In the example above, the _Dog_ class extends the _Animal_ class. When the _Dog_ class is defined, JavaScript creates a constructor function for the _Dog_ class and sets the _Dog_ class's prototype to an instance of the _Animal_ class.

## Useful Prototype Methods

- _Object.create()_: The _Object.create()_ method creates a new object with the specified prototype object and properties.

```js
const person = {
  sing() {
    return 'La la la...'
  },
  isHuman: true,
}

const john = Object.create(person)
```

- _Object.getPrototypeOf()_: The _Object.getPrototypeOf()_ method returns the prototype of the specified object.

```js
const person = {
  sing() {
    return 'La la la...'
  },
  isHuman: true,
}

const john = Object.create(person)
Object.getPrototypeOf(john) === person // true
```

- _Object.setPrototypeOf()_: The _Object.setPrototypeOf()_ method sets the prototype of a specified object to another object or null.

```js
const person = {
  sing() {
    return 'La la la...'
  },
  isHuman: true,
}

const john = {}

Object.setPrototypeOf(john, person)
```

- _isPrototypeOf()_: The _isPrototypeOf()_ method checks if an object exists in another object's prototype chain.

```js
const person = {
  sing() {
    return 'La la la...'
  },
  isHuman: true,
}

const john = Object.create(person)

person.isPrototypeOf(john) // true
```

## Conclusion

- JavaScript did not always have classes. It was introduced in ES6 (ECMAScript 2015). Before ES6, JavaScript used prototype-based inheritance.
- Prototype-based inheritance is a style of object-oriented programming in which classes are not present and behavior reuse (inheritance) is performed via a process of cloning existing objects that serve as prototypes.
- In JavaScript, every object has a prototype. When a method or property is called on an object, JavaScript will first look for that method or property on the object itself. If it doesn't find it, it will look for it on the object's prototype. If it doesn't find it there, it will look for it on the prototype's prototype, and so on, until it reaches the end of the prototype chain.
- Classes in JavaScript are syntactic sugar for prototype-based inheritance.
- When a class is defined, JavaScript creates a constructor function and adds methods to the constructor function's prototype.
- Classes can also extend other classes. When a class extends another class, JavaScript
  creates a constructor function for the subclass and sets the subclass's prototype to an instance of the superclass.

```

```
