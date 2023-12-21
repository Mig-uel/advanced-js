export class Cat {
  constructor(name, breed) {
    this.name = name
    this.breed = breed
  }

  static genusSpecies = 'felis catus'

  // factory function/methods
  static registerStray() {
    const names = ['Muffin', 'Biscuit', 'Sleepy', 'Dodo', 'Princess Butterface']

    const name = choice(names)

    return new Cat(name, 'unknown')
  }

  // static meow() {
  //   return 'MEOW MEOW MEOW'
  // }

  meow() {
    return `${this.name} says meow`
  }
}

function choice(arr) {
  const randIndex = Math.floor(Math.random() * arr.length)
  return arr[randIndex]
}
