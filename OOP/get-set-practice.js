class User {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  set fullName(name) {
    const [first, last] = name.split(' ')
    this.firstName = first
    this.lastName = last
  }
}

const user = new User('Miguel', 'Castillo')
console.log(user.fullName)
