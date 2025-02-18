# The Mysterious Keyword _'this'_ in JavaScript

_`this`_ is a keyword in JavaScript that refers to the object it belongs to. It has different values depending on where it is used:

1. In a method, _`this`_ refers to the owner object.
2. Alone, _`this`_ refers to the global object.
3. In a function, _`this`_ refers to the global object.
4. In a function, in strict mode, _`this`_ is _`undefined`_.
5. In an event, _`this`_ refers to the element that received the event.
6. Methods like _`call()`_, and _`apply()`_ can refer _`this`_ to any object.

```javascript
const person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function () {
    return this.firstName + ' ' + this.lastName
  },
}
```

In the example above, _`this`_ refers to the _`person`_ object.

```javascript
const person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function () {
    return `${this.firstName} ${this.lastName}`
  },
}

const pFullName = person.fullName
console.log(pFullName()) // undefined undefined
```

In the example above, _`this`_ refers to the _`person`_ object when used inside the _`fullName`_ method. However, when we assign the _`person.fullName`_ method to a variable, _`this`_ no longer refers to the _`person`_ object.

To solve this issue, we can use the _`bind()`_ method to bind the _`this`_ value to the _`person`_ object.

```javascript
const person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function () {
    return `${this.firstName} ${this.lastName}`
  },
}

const pFullName = person.fullName.bind(person)
console.log(pFullName()) // John Doe
```

In the example above, we bind the _`this`_ value to the _`person`_ object using the _`bind()`_ method.

```javascript
class Cat {
  constructor(firstName) {
    this.firstName = firstName
  }

  dance(style = 'salsa') {
    console.log(`${this.firstName} is dancing ${style}`)
  }
}

const cat = new Cat('Tom')
cat.dance() // Tom is dancing salsa

const fDance = cat.dance
fDance() // TypeError: Cannot read property 'firstName' of undefined
```

In the example above, _`this`_ refers to the _`cat`_ object when used inside the _`dance`_ method. However, when we assign the _`cat.dance`_ method to a variable, _`this`_ no longer refers to the _`cat`_ object.

# Global Object and _'this'_ Keyword

In a sense, JavaScript doesn't have functions. Everything is called on something, like a method. If you call a function without a context, it is called on the global object. In the browser, the global object is _`window`_.

```javascript
function greet() {
  return 'Hi'
}

console.log(greet()) // Hi
console.log(window.greet()) // Hi
```

When you call a function on nothing, it is called on the global object.
The global object depends on the environment. In the browser, it is _`window`_. In Node.js, it is _`global`_. In a web worker, it is _`self`_.

The value of the keyword _`this`_ depends on the context in which it is used.

# The "Left of the Dot" Rule

The value of _`this`_ is determined by the object that is calling the function. If the function is called as a method of an object, _`this`_ is the object that the function is a property of.

```javascript
function whatIsThis() {
  return this
}

whatIsThis() // window
```

The value of this will be equal to the whatever is left of the dot when the function is called.

```javascript
function whatIsThis() {
  return this
}

const obj = {
  color: 'red',
  age: 42,
  whatIsThis,
}

obj.whatIsThis() // obj: { color: 'red', age: 42, whatIsThis: [Function: whatIsThis] }
```

In the example above, _`this`_ is equal to _`obj`_ because _`obj`_ is left of the dot when the function is called.

# _'this'_ And Classes

In classes, _`this`_ refers to the object that is created from the class.

```javascript
class Cat {
  constructor(name) {
    this.name = name
  }

  speak() {
    console.log(`${this.name} says meow`)
  }
}

const cat = new Cat('Tom')
cat.speak() // Tom says meow

const fSpeak = cat.speak
fSpeak() // TypeError: Cannot read property 'name' of undefined
```

In this example, when we assign the _`cat.speak`_ method to a variable, _`this`_ no longer refers to the _`cat`_ object but to _undefined_.
When you call a function on nothing, but the function comes from inside a class, _`this`_ will be _undefined_, not the global object.
_`this`_ loses its context when you assign a method to a variable.

# The Call Method

The _`call()`_ method calls a function with a given _`this`_ value and arguments provided individually. Sometimes, you'll need to say "call this function on this object".

- The first argument is the value of _`this`_.
- The rest of the arguments are the arguments that you want to pass to the function.

```javascript
class Cat {
  constructor(firstName) {
    this.firstName = firstName
  }

  dance(style = 'salsa') {
    console.log(`${this.firstName} is dancing ${style}`)
  }
}

const cat = new Cat('Tom')
cat.dance() // Tom is dancing salsa

// assign the dance method to a variable
const fDance = cat.dance

const kitty = new Cat('Kitty')
fDance.call(kitty, 'tango') // Kitty is dancing tango
```

In the example above, we use the _`call()`_ method to call the _`dance`_ method on the _`kitty`_ object.

- The first argument is the value of _`this`_.
- The second argument is the argument that you want to pass to the function.

```javascript
const john = {
  name: 'John',
  city: 'New York',
  sing: function () {
    console.log(`${this.name} is singing LALA`)
  },
}

const jane = {
  name: 'Jane',
  city: 'San Francisco',
}

john.sing() // John is singing LALA

john.sing.call(jane) // Jane is singing LALA
```

In the example above, we use the _`call()`_ method to call the _`sing`_ method on the _`jane`_ object.

# The Apply Method

The _`apply()`_ method is similar to the _`call()`_ method. The only difference is that the _`apply()`_ method takes an array of arguments instead of a list of arguments.

```javascript
const ringo = {
  firstName: 'Ringo',
  greet: function (greeting) {
    console.log(`${this.firstName} says: ${greeting}!`)
  },
}

const paul = {
  firstName: 'Paul',
  lastName: 'McCartney',
}

// using the call method
ringo.greet.call(paul, 'Hello') // Paul says: Hello!

// using the apply method
ringo.greet.apply(paul, ['Hello']) // Paul says: Hello!
```

In the example above, we use the _`apply()`_ method to call the _`greet`_ method on the _`paul`_ object.

- apply takes an array of arguments. In this case, we pass an array with one element, 'Hello'.
- Each element in the array will be passed as an argument to the function.

# The Bind Method

The _`bind()`_ method creates a new function that, when called, has its _`this`_ keyword set to the provided value.

- The _`bind()`_ method returns a new function.
- The new function has the _`this`_ value set to the value passed to the _`bind()`_ method.
- It accepts arguments just like the original function.
- You can 'perma-bind' a function to an context.

```javascript
const john = {
  name: 'John',
  city: 'New York',
  sing: function () {
    console.log(`${this.name} is singing LALA`)
  },
}

const jane = {
  name: 'Jane',
  city: 'San Francisco',
}

const janeSing = john.sing.bind(jane)
```

In the example above, we use the _`bind()`_ method to bind the _`sing`_ method to the _`jane`_ object.
