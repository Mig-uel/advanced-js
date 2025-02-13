const notes = retrieveNotes()
const saveButton = document.getElementById('save')
const notesList = document.getElementById('notes')
const textArea = document.getElementById('note')

function saveNoteToLocalStorage(text) {
  notes.push(text)

  localStorage.setItem('notes', JSON.stringify(notes))
}

function createNoteElement(text) {
  const noteElement = document.createElement('li')
  noteElement.textContent = text

  notesList.appendChild(noteElement)
}

function retrieveNotes() {
  return JSON.parse(localStorage.getItem('notes')) ?? []
}

function loadNotes() {
  if (!notes.length) return

  notes.forEach(createNoteElement)
}

saveButton.addEventListener('click', () => {
  const text = textArea.value.trim()

  createNoteElement(text)
  saveNoteToLocalStorage(text)

  textArea.value = ''
})

loadNotes()
