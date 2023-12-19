# Object Oriented Programming

## Objects

- POJO: Plain-Old JavaScript Objects
- properties that don't exists returns undefined
- all key names get 'stringified'

## Classes

- Classes are blueprints for objects
- Defines properties and methods that each instance of the class will have
- Make a new instance of a class with the `new` keyword
- Can add properties and methods to a class instance
- UpperCamelCase for class names
- typeof instance === 'object'
- instanceof returns true if an object is an instance of a class
- constructor method is called when a new instance is created
- constructor method is optional
- constructor method is where you put the properties that you want each instance to have
- constructors return undefined
- to inherit from another class, use the extends keyword
- super() calls the constructor of the parent class
- static properties and methods are called on the class itself, not on instances of the class
- static properties and methods are useful for utility functions
- static properties and methods are defined with the static keyword