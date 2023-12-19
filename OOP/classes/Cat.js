export class Cat {
  constructor(name, breed) {
    this.name = name
    this.breed = breed
  }

  static genusSpecies = 'felis catus'

  static meow() {
    return 'MEOW MEOW MEOW'
  }
}
