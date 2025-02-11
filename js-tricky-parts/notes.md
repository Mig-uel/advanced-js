# Floating Point Imprecision

- JavaScript uses the IEEE 754 standard for floating point numbers.
- This standard uses a fixed number of bits to represent a number.
- This means that some numbers cannot be represented exactly.
- For example, 0.1 cannot be represented exactly in binary.
- This can lead to unexpected results when comparing floating point numbers.
- For example, 0.1 + 0.2 is not equal to 0.3 in JavaScript.
- To avoid this issue, you can use the `Number.EPSILON` constant to compare floating point numbers.
- JavaScript represents numbers as _floating point_, like `1.234` or `3.14`.
- Sometimes, this leads to imprecision, like `0.1 + 0.2` not being exactly `0.3`.
- This can lead to bugs.
  - `.1 + .2 === .3` returns `false`.
- To avoid this, you can use `Number.EPSILON`.

```js
const isApproximatelyEqual = (a, b) => {
  return Math.abs(a - b) < Number.EPSILON
}

console.log(isApproximatelyEqual(0.1 + 0.2, 0.3)) // true
```

# BigInt() and Really Large Numbers

- There are two ways to represent large numbers in JavaScript: BigInt and adding an `n` suffix.
- BigInt is a new primitive type in JavaScript that can represent integers with arbitrary precision.
- You can create a BigInt by calling the `BigInt()` function with a number.
  - `const bigInt = BigInt(123456789012345678901234567890)`
- You can also create a BigInt by adding an `n` suffix to a number.
  - `const bigInt = 123456789012345678901234567890n`
- BigInts can be used with operators like `+`, `-`, `*`, and `/`.
- BigInts and Floating Point Numbers cannot be mixed in operations.

# isNaN() and Number.isNaN()

- JavaScript's _NaN_ value is a special value that represents "Not a Number" and can be tricky.
- It often comes from:
  - Performing arithmetic operations on non-numeric values.
  - Performing arithmetic operations that have no valid result.
  - Logical math errors, like dividing by zero.
  - Imaginary number, like the square root of a negative number.
  - Conversion errors, like `Number("abc")`.

```js
console.log(0 / 0) // NaN
console.log(1 / 0) // Infinity
console.log(-1 / 0) // -Infinity
console.log(Math.sqrt(-1)) // NaN
console.log(Number('abc')) // NaN
```

## Checking for NaN

- You can check if a value is NaN using the `isNaN()` function.
- All _NaN_ values are considered unique and not equal to each other.
- This means that `NaN === NaN` returns `false`.
- There are two ways to check if a value is NaN:
  - Using the `isNaN()` function:
    - This returns true if _n_ is _NaN_ or is a value that cannot be converted to a number.
    - However, the `isNaN()` function has some quirks:
      - It coerces the argument to a number before checking if it is _NaN_.
      - This means that `isNaN("abc")` returns `true`.
      - This can lead to unexpected results.
  - Using the `Number.isNaN()` function:
    - This returns true if _n_ is _NaN_ and only if _n_ is _NaN_.
    - This does not coerce the argument to a number.
    - This means that `Number.isNaN("abc")` returns `false`.

# Post and Pre Increment/Decrement Operators (++x, x++, --x, x--)

- There us a difference between the post and pre increment/decrement operators:

```js
let x = 5
let y = ++x // add 1 to x then evaluate: x = 6, y = 6

let a = 5
let b = b++ // evaluate a then set b, then add 1 to b: a = 5, b = 6
```

- The post increment/decrement operators evaluate the expression first, then increment/decrement the variable.
- The pre increment/decrement operators increment/decrement the variable first, then evaluate the expression.

## Changing After Returning

- Using `++x` is often useful as a return statement - return this value to the caller, but increment it for the next time.

```js
class Counter {
  constructor() {
    this.count = 1
  }

  next() {
    return this.count++
  }
}

const counter = new Counter()
console.log(counter.count) // 1
console.log(counter.next()) // 1

console.log(counter.count) // 2
console.log(counter.next()) // 2

console.log(counter.count) // 3
```

# Semi-colons and Automatic Semicolon Insertion

- You can write JavaScript with or without semi-colons; if you omit them, JavaScript will automatically insert them in a process called _Automatic Semicolon Insertion_ or .
- However, this can lead to unexpected results.
- For example, if you omit a semi-colon after a return statement, JavaScript will insert one.
- This can lead to a syntax error if the return statement is on a new line.
- To avoid this issue, you can use semi-colons or always put the return statement on the same line as the closing brace.

```js
function add(a, b) {
  return
  a + b
}

console.log(add(1, 2)) // undefined
```

# Generators and Yield

- JavaScript can have _generator functions_ - function that return a _Generator_ that can be lazily iterated over.
- Generator functions are basically functions that can be paused and resumed.
- You can create a generator function by using the `function*` syntax.
- You can pause a generator function by using the `yield` keyword.
- You can resume a generator function by calling the `next()` method on the generator object.
- You can pass a value to a generator function by calling the `next()` method with an argument.
- You can return a value from a generator function by using the `return` keyword.
- You can close a generator function by using the `throw` keyword.

### Example 1

```js
function* evens(n) {
  while (true) {
    yield n
    n += 2
  }
}

const generator = evens(0)
console.log(generator.next().value) // 0
console.log(generator.next().value) // 2
console.log(generator.next().value) // 4
console.log(generator.next().value) // 6
```

- The `evens()` function is a generator function that returns a generator object that generates even numbers.
- The `yield` keyword pauses the generator function and returns the value of `n`.
- The `next()` method resumes the generator function and increments `n` by 2.

### Example 2

```js
function* myCats() {
  yield 'Fluffy'
  yield 'Mittens'
  yield 'Snowball'
}

const catGenerator = myCats()
console.log(catGenerator.next().value) // 'Fluffy'
console.log(catGenerator.next().value) // 'Mittens'
console.log(catGenerator.next().value) // 'Snowball'
console.log(catGenerator.next()) // { value: undefined, done: true }
```

- The `myCats()` function is a generator function that returns a generator object that generates cat names.
- The `yield` keyword pauses the generator function and returns the value of the cat name.
- The `next()` method resumes the generator function and returns an object with the value of the cat name and a `done` property that indicates if the generator has finished.

### Example 3

```js
function* fibonacci() {
  let a = 0,
    b = 1

  while (true) {
    yield a
    ;[a, b] = [b, a + b]
  }
}

const fibGenerator = fibonacci()
console.log(fibGenerator.next().value) // 0
console.log(fibGenerator.next().value) // 1
console.log(fibGenerator.next().value) // 1
console.log(fibGenerator.next().value) // 2
console.log(fibGenerator.next().value) // 3
```

- The `fibonacci()` function is a generator function that returns a generator object that generates Fibonacci numbers.
- The `yield` keyword pauses the generator function and returns the value of `a`.
- The `next()` method resumes the generator function and calculates the next Fibonacci number.

## Use Cases For Function Generators

- Generators are useful for:
  - Lazy evaluation: You can generate values on demand.
  - Infinite sequences: You can generate an infinite sequence of values.
  - Asynchronous programming: You can pause and resume asynchronous operations.

```js
const allImages = Array.from(
  { length: 100 },
  (_, i) => `https://placeimg.com/640/480/any?image=${i + 1}`
)

function* getBatchOfImages(imagesArr, batchSize = 10) {
  let currIndex = 0

  while (currIndex < imagesArr.length) {
    yield images.slice(currIndex, currIndex + batchSize)

    currIndex += batchSize
  }
}

const imageGenerator = getBatchOfImages(allImages)

console.log(imageGenerator.next().value) // [ 'https://placeimg.com/640/480/any?image=1', ... ]
console.log(imageGenerator.next().value) // [ 'https://placeimg.com/640/480/any?image=11', ... ]
```

# Array.from()

- The `Array.from()` method creates a new array from an array-like or iterable object.
- You can pass an array-like object, like a string or a NodeList, to the `Array.from()` method.
- You can pass an iterable object, like a Set or a Map, to the `Array.from()` method.
- You can pass a mapping function to the `Array.from()` method to transform the elements of the array.
- You can pass a `this` argument to the `Array.from()` method to set the `this` value in the mapping function.

### Example 1

```js
const str = 'hello'
const arr = Array.from(str)

console.log(arr) // [ 'h', 'e', 'l', 'l', 'o' ]
```

- The `Array.from()` method creates a new array from the string `hello`.

### Example 2

```js
const set = new Set([1, 2, 3])
const arr = Array.from(set)

console.log(arr) // [ 1, 2, 3 ]
```

- The `Array.from()` method creates a new array from the Set `[1, 2, 3]`.

### Example 3

```js
const buttons = document.querySelectorAll('button')
const arr = Array.from(buttons)

console.log(arr) // [ <button>, <button>, <button> ]
```

- The `Array.from()` method creates a new array from the NodeList of buttons.

### Example 4

```js
Array.from('hello', (char) => char.toUpperCase())
```

- Array.from() can take a mapping function as a second argument.
- This function is called for each element in the array.
- The `Array.from()` method creates a new array from the string `hello` and transforms each character to uppercase.

### Example 5

```js
Array.from({ length: 10 }, (el) => true)

// [ true, true, true, true, true, true, true, true, true, true ]
```

- The `Array.from()` method creates a new array with a length of 10 and sets each element to `true`.

### Example 6

```js
Array.from({ length: 10 }, (element, index) => index + 1)

// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
```

- The `Array.from()` method creates a new array with a length of 10 and sets each element to the index plus 1.
