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
