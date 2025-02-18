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
