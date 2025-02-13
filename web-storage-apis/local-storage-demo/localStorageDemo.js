const button = document.getElementById('toggle')

function toggleTheme() {
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'light')
    document.body.classList.remove('dark-mode')
    button.innerText = 'Enable Dark Mode'
  } else {
    localStorage.setItem('theme', 'dark')
    document.body.classList.add('dark-mode')
    button.innerText = 'Enable Light Mode'
  }
}

function init() {
  const savedTheme = localStorage.getItem('theme')

  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode')
    button.innerText = 'Enable Light Mode'

    return undefined
  }

  return undefined
}

button.addEventListener('click', toggleTheme)

init()
