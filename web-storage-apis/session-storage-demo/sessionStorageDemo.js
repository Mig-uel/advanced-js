const form = document.getElementById('form')

form.addEventListener('input', (e) => {
  const { name, value } = e.target

  const formData = JSON.parse(sessionStorage.getItem('formData')) ?? {}

  formData[name] = value

  sessionStorage.setItem('formData', JSON.stringify(formData))
})

function load() {
  const formData = JSON.parse(sessionStorage.getItem('formData')) ?? {}

  for (let field in formData) {
    form.elements[field].value = formData[field]
  }
}

load()
