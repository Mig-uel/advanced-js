const boxInterval = document.getElementById('boxInterval')
const boxAnimationFrame = document.getElementById('boxAnimationFrame')

let intervalAngle = 0
let animationFrameAngle = 0

function animateWithInterval() {
  boxInterval.style.transform = `rotate(${intervalAngle}deg)`
  intervalAngle += 2
}

//start the animation
setInterval(animateWithInterval, 8) // 60FPS (approximately)

function animateWithAnimationFrame() {
  boxAnimationFrame.style.transform = `rotate(${animationFrameAngle}deg)`
  animationFrameAngle += 2
  requestAnimationFrame(animateWithAnimationFrame)
}

requestAnimationFrame(animateWithAnimationFrame)
