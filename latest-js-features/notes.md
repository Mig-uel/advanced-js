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
