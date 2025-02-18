# Object-Oriented Programming (OOP) Under The Hood

JavaScript did not always have classes. It was introduced in ES6 (ECMAScript 2015). Before ES6, JavaScript used prototype-based inheritance.

Prototype-based inheritance is a style of object-oriented programming in which classes are not present and behavior reuse (inheritance) is performed via a process of cloning existing objects that serve as prototypes.

In JavaScript, every object has a prototype. When a method or property is called on an object, JavaScript will first look for that method or property on the object itself. If it doesn't find it, it will look for it on the object's prototype. If it doesn't find it there, it will look for it on the prototype's prototype, and so on, until it reaches the end of the prototype chain.

Syntactic sugar is a syntax within a programming language that is designed to make things easier to read or to express. Classes in JavaScript are syntactic sugar for prototype-based inheritance.
