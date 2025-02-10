# Optional Chaining

- The optional chaining operator (?.) allows reading the value of a property located deep within a chain of connected objects without having to check each reference to make sure that each reference is valid.
- The ?. operator functions similarly to the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined.
- The optional chaining operator is useful for chaining together a sequence of properties when it's possible that a reference or function may be undefined or null.

```js
const user = {
  name: 'John',
  address: {
    city: 'New York',
  },
}

// Without optional chaining
const city = user && user.address && user.address.city

// With optional chaining
const optionalCity = user?.address?.city
```

- The optional chaining operator can also be used with function calls.

```js
const user = {
  getName: () => 'John',
}

const userName = user.getName?.()
const nonExistent = user.nonExistentMethod?.()
```

- The optional chaining operator can be used with arrays as well.

```js
const arr = [1, 2, 3]

const firstElement = arr?.[0]
const fourthElement = arr?.[3]
```

# Nullish Coalescing Operator

- The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
- This is a way to handle default values more predictably than using the OR (||) operator, which would return the right-hand side operand if the left-hand side operand is falsy (e.g., 0, '', false).

```js
const user = {
  firstName: 'John',
  age: 0,
}

const lastName = user?.lastName ?? 'Doe'
```

- The nullish coalescing operator can be used to provide default values for variables that may be null or undefined.

```js
const user = {
  firstName: 'John',
  lastName: null,
}

const lastName = user.lastName ?? 'Doe'
```

# Numeric Separators

- Numeric separators are underscores (\_) that enhance readability for numeric literals by separating groups of digits to make large numeric literals easier to read.
- Numeric separators are ignored by the JavaScript engine, so they do not affect the value of the numeric literal.

```js
// Without numeric separators, long numeric literals can be hard to read
const withoutSeparators = 1000000000

// With numeric separators, the numeric literal is easier to read
const withSeparators = 1_000_000_000

console.log(withSeparators) // Output: 1000000000
```

- Numeric separators can be used with binary, octal, and hexadecimal literals as well.

```js
const binary = 0b1010_0001_1000_0101
const octal = 0o7_5_7
const hex = 0x0a_a0_b0_c0
```

# Array.prototype.at()

- The Array.prototype.at() method returns the element at the specified index in an array.
- The method is similar to array indexing using bracket notation, but it allows negative indices to access elements from the end of the array.
- The Array.prototype.at() method is useful when you need to access elements from the end of an array without having to calculate the index manually.

```js
const colors = ['red', 'green', 'blue', 'yellow', 'orange']

console.log(colors.at(0)) // Output: red
console.log(colors.at(-1)) // Output: orange
console.log(colors.at(-2)) // Output: yellow
```

# String.prototype.replaceAll()

- The String.prototype.replaceAll() method replaces all occurrences of a specified substring with another substring.
- The method returns a new string with all occurrences of the specified substring replaced.

```js
const str =
  'I really love dogs. My dog is such an amazing pet. She loves to cuddle with me and play. What a great dog. dog. dog. dog.'

const newStr = str.replaceAll('dog', 'cat')
```

- Regular expressions can also be used with the String.prototype.replaceAll() method.

# Logical Assignment

- Logical assignment operators combine logical operators (&&, ||, ??) with assignment operators (=) to provide a more concise way of assigning values based on logical conditions.

```js
let x = null
let y = 'default'

// OR assignment (x ||= y) is equivalent to x || (x = y)
x ||= y
console.log(x) // Output: default

let a = 0
let b = 2

// AND assignment (a &&=b) is equivalent to a && (a = b)
a &&= b
console.log(a) // Output: 0
```

- Logical assignment operators can be used with the nullish coalescing operator as well.

```js
let x = null
let y = 'default

// Nullish coalescing assignment (x ??= y) is equivalent to x ?? (x = y)
x ??= y
console.log(x) // Output: default
```

```js
let loggedInUser = { username: 'john_doe' }

// Traditional way to check if the user is logged in and updating the user
if (loggedInUser) {
  loggedInUser = { ...loggedInUser, colorPreference: 'blue' }
}

// Using logical assignment operators
loggedInUser &&= { ...loggedInUser, colorPreference: 'blue' }
```

# Promise.any()

- The Promise.any() method takes an iterable of Promise objects and returns a single Promise that resolves when any of the promises in the iterable have resolved.
- If all of the promises are rejected, the Promise.any() method returns a single rejected Promise with an AggregateError that contains an array of rejection values.

```js
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

Promise.any([
  fetch(`${BASE_URL}/1`),
  fetch(`${BASE_URL}/2`),
  fetch(`${BASE_URL}/3`),
  fetch(`${BASE_URL}/4`),
  fetch(`${BASE_URL}/5`),
  fetch(`${BASE_URL}/6`),
])
  .then((res) => {
    console.log('THIS IS THE FIRST TO FINISH', res)
  })
  .catch((err) => {
    console.error('ALL PROMISES WERE REJECTED', err)
  })
```

# WeakRefs

- WeakRefs are a new type of reference in JavaScript that allow you to create references to objects without preventing them from being garbage collected.
- WeakRefs are useful for creating caches or other data structures that need to hold references to objects without preventing them from being garbage collected.
- WeakRefs are created using the WeakRef constructor and can be dereferenced using the deref() method.

```js
let obj = { name: 'John' }
const weakRef = new WeakRef(obj)

console.log(weakRef.deref()) // Output: { name: 'John' }

obj = null

console.log(weakRef.deref()) // Output: undefined
```

# Class Fields (public and private)

- Public and private class fields allow you to define instance properties directly within a class definition.
- Public class fields are defined using the syntax fieldName = value, and private class fields are defined using the syntax #fieldName = value.
- Public class fields are accessible from outside the class, while private class fields are only accessible from within the class.

```js
class MyClass {
  // Public class field
  publicField = 'public field'

  // Private class field
  #privateField = '

  getPrivateField() {
    return this.#privateField
  }
}

const instance = new MyClass()
console.log(instance.publicField) // Output: public field
console.log(instance.getPrivateField()) // Output: private field
console.log(instance.#privateField) // Error: privateField is not defined
```

# Static Initialization Blocks

- Static initialization blocks are a new feature in JavaScript that allow you to run code when a class is defined.
- Static initialization blocks are defined using the static keyword followed by a block of code enclosed in curly braces.
- Static initialization blocks are executed when the class is defined, before any instances of the class are created
- This feature allows you to have a block of code that runs once when the class is defined, useful for setting up shared state or configuration for classes.

```js
class MyClass {
  static sharedState

  static {
    console.log('Static initialization block')
    this.sharedState = 'Initialized'
  }
}

console.log(MyClass.sharedState) // Output: Initialized
```

# Final Thoughts

- The optional chaining operator (?.) allows you to safely access nested properties without causing errors.
- The nullish coalescing operator (??) provides a way to handle default values for null or undefined variables.
- Numeric separators enhance the readability of large numeric literals.
- The Array.prototype.at() method allows you to access elements from the end of an array using negative indices.
- The String.prototype.replaceAll() method replaces all occurrences of a substring in a string.
- Logical assignment operators combine logical operators with assignment operators for concise value assignment based on logical conditions.
- The Promise.any() method returns a Promise that resolves when any of the promises in an iterable have resolved.
- WeakRefs allow you to create references to objects without preventing them from being garbage collected.
- Public and private class fields allow you to define instance properties directly within a class definition.
- Static initialization blocks allow you to run code when a class is defined, useful for setting up shared state or configuration for classes.
