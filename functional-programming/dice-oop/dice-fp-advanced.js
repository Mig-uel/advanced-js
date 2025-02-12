/** Functional Programming Approach */

// Utility functions
const partial =
  (f, ...fixedArgs) =>
  (...args) =>
    f(...fixedArgs, ...args)

const compose = (...funcs) =>
  funcs.reduceRight(
    (prev, curr) =>
      (...args) =>
        prev(curr(...args))
  )

/** Dice Game */
const getRandomRoll = () => Math.floor(Math.random() * 6) + 1
const checkWin = (roll) => roll === 6

// Display result
const displayResult = (element, message) => {
  element.innerText = message
}

// Generate display message
const createMessage = (roll) => {
  return checkWin(roll)
    ? `You rolled a ${roll}. You win!`
    : `You rolled a ${roll}. Try again!`
}

// Refactor code below
const createDiceGame = (rollButtonId, resultDisplayId) => {
  // Partial implementation of displayResult with fixed resultDisplayId element
  const showResult = partial(
    displayResult,
    document.getElementById(resultDisplayId)
  )

  const playGame = compose(getRandomRoll, createMessage, showResult)

  document.getElementById(rollButtonId).addEventListener('click', playGame)
}

createDiceGame('rollBtn', 'result')
