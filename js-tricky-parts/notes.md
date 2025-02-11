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
