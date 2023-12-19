export class BankAccount {
  constructor(accountNumber, accountHolder, balance = 0) {
    this.accountNumber = accountNumber
    this.accountHolder = accountHolder
    this.balance = balance
  }

  deposit(amount) {
    this.balance += amount
    return `$${amount} deposited. Your new balance is ${this.balance}`
  }

  withdraw(amount) {
    if (amount > balance) {
      return `Insufficient Funds!`
    }

    this.balance -= amount
    return `You withdrew $${amount}. Your new balance is ${this.balance}`
  }
}
