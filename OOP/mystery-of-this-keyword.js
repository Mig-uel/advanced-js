const person = {
  name: 'Conan',
  city: 'Los Angeles',
  sing: function () {
    return `${this.name} sings LALALA`
  },
}

console.log(person.sing()) // this works / prints out Conan sings .......

const pSing = person.sing
console.log(pSing()) // this does not work / prints out undefined sings ......

class Cat {
  constructor(firstName) {
    this.firstName = firstName
  }

  dance(style = 'tango') {
    return `Meow, I am ${this.firstName} and I like to ${style}`
  }
}

const fluffy = new Cat('fluffy')
console.log(fluffy.dance())

const fDance = fluffy.dance
// console.log(fDance()) // does not work
