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
