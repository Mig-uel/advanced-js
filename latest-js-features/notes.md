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
