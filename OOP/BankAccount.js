export class BankAccount {
  constructor(accountNumber, accountHolder, balance = 0) {
    this.accountNumber = accountNumber
    this.accountHolder = accountHolder
    this.balance = balance
  }

  deposit(amount) {
    this.balance += amount
    console.log(`$${amount} deposited. Your new balance is $${this.balance}`)
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log(`Insufficient Funds!`)
      return
    }

    this.balance -= amount
    console.log(`You withdrew $${amount}. Your new balance is $${this.balance}`)
  }
}
