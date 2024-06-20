function whatIsThis() {
  console.log(this)
}
// whatIsThis() // global object

const obj = {
  color: 'purple',
  whatIsThis,
}

console.log(obj.whatIsThis) // obj object

const person = {
  name: 'Conan',
  city: 'Los Angeles',
  sing: function () {
    console.log(this)
    console.log(`${this.name} sings lalala`)
  },
}
person.sing()

const s = person.sing // calling it on the global object
s() // global scope
