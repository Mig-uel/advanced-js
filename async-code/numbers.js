/** Question 1a */
async function showNumberTrivia() {
  const res = await fetch('http://numbersapi.com/12', {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json()

  console.log(data)
}

/** Question 1b */
async function showNumberRace(a, b, c, d) {
  const requests = [
    fetch(`http://numbersapi.com/${a}?json`),
    fetch(`http://numbersapi.com/${b}?json`),
    fetch(`http://numbersapi.com/${c}?json`),
    fetch(`http://numbersapi.com/${d}?json`),
  ]

  return Promise.race(requests)
}

// showNumberRace(1, 2, 3, 4)
//   .then((res) => res.json())
//   .then((data) => console.log(data))

/** Question 1c */
function showNumberAll(a, b, c, d) {
  const requests = [
    fetch(`http://numbersapi.com/${a}?json`),
    fetch(`http://numbersapi.com/${b}?json`),
    fetch(`${c}WRONG`),
    fetch(`http://numbersapi.com/${d}?json`),
  ]

  const promises = Promise.allSettled(requests)
  promises
    .then((data) => {
      const rejected = data.filter((i) => i.status === 'rejected')

      rejected.map((i) => {
        console.log(i.reason)
      })

      return data.filter((i) => i.status === 'fulfilled')
    })
    .then((data) => {
      data.map((i) => i.value.json().then((num) => console.log(num)))
    })
}

showNumberAll(1, 2, 3, 4)
