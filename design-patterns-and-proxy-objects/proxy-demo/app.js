const span = document.querySelector('span')
const input = document.querySelector('input')

const user = {
  username: '',
}

const handler = {
  set(obj, property, newValue) {
    obj[property] = newValue

    span.textContent = newValue
  },
}
const userProxy = new Proxy(user, handler)

input.addEventListener('keyup', (e) => {
  userProxy.username = e.target.value
})
