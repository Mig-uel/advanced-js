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

const pFullName = person.fullName // does not work
```
