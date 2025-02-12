function getRandomColor() {
  const palette = [
    '#FFADAD',
    '#FFD6A5',
    '#FDFFB6',
    '#CAFFBF',
    '#9BF6FF',
    '#A0C4FF',
    '#BDB2FF',
    '#FFC6FF',
  ]

  const randomIndex = Math.floor(Math.random() * palette.length)

  return palette[randomIndex]
}

const content = document.getElementById('content')

function loadMoreItems() {
  const scrollDistanceToBottom =
    document.documentElement.scrollHeight - window.scrollY - window.innerHeight

  if (scrollDistanceToBottom < 200) {
    console.log('LOADING DATA FROM API')

    for (let i = 0; i < 10; i++) {
      const item = document.createElement('div')

      item.classList.add('item')
      item.textContent = 'Item ' + (content.children.length + 1)
      item.style.background = getRandomColor()

      content.appendChild(item)
    }
  }
}

/** Basic Throttling Logic */
let isThrottled = false

window.addEventListener('scroll', () => {
  if (!isThrottled) {
    loadMoreItems()

    isThrottled = true

    setTimeout(() => {
      isThrottled = false
    }, 300)
  }
})

// initial load
loadMoreItems()
