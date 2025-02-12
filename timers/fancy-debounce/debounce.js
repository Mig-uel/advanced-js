function queryAPI(searchTerm) {
  console.log(`SEARCHING FOR ${searchTerm}`)
}

const searchInput = document.querySelector('#search')

/** Basic Debounce Logic */
// let debounceTimeout

// searchInput.addEventListener('input', () => {
//   clearTimeout(debounceTimeout)

//   debounceTimeout = setTimeout(() => {
//     queryAPI()
//   }, 400)
// })

/** Advanced Debounce Logic */
function debounce(callback, delay = 500) {
  let timeoutId

  return function (searchTerm) {
    if (timeoutId) clearTimeout(timeoutId)

    timeoutId = setTimeout(() => callback(searchTerm), delay)
  }
}

const debounceQueryAPI = debounce(queryAPI, 300)

searchInput.addEventListener('input', (e) => debounceQueryAPI(e.target.value))
