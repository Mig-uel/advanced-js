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
