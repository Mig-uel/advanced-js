function queryAPI() {
  console.log('SEARCHING THE API!!!')
}

const searchInput = document.querySelector('#search')

let debounceTimeout

searchInput.addEventListener('input', () => {
  clearTimeout(debounceTimeout)

  debounceTimeout = setTimeout(() => {
    queryAPI()
  }, 400)
})
