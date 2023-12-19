import { BankAccount } from './BankAccount.js'

const pet = {
  species: 'Dog',
  name: 'Elton',
  age: 1,
}

pet.bark = function () {
  return 'WOOF WOOF!'
}

// BankAccount Class Practice
const myBank = new BankAccount('123XYZ', 'Miguel Castillo', 10000)
console.log(myBank.balance)

myBank.withdraw(50)
