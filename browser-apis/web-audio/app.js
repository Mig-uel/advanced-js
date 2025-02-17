const context = new AudioContext()

const slider = document.getElementById('freq')
const playButton = document.getElementById('play')
const stopButton = document.getElementById('stop')
const label = document.getElementById('freqLabel')

let oscillator = null

playButton.addEventListener('click', () => {
  oscillator = context.createOscillator()

  oscillator.type = 'sawtooth'
  oscillator.frequency.value = slider.value

  oscillator.connect(context.destination)
  oscillator.start()
})

slider.addEventListener('input', (e) => {
  const frequency = e.target.value

  if (oscillator) {
    oscillator.frequency.value = frequency
    freqLabel.innerText = `${frequency}Hz`
  }
})

stopButton.addEventListener('click', () => {
  if (oscillator) {
    oscillator.stop()
    oscillator = null
  }
})
