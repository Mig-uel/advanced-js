const canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext('2d')
const balls = []

/** Ball Class */
class Ball {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.x_velocity = (Math.random() - 0.5) * 10
    this.y_velocity = (Math.random() - 0.5) * 10
    this.endAngle = Math.PI * 2
    this.size = Math.random() * 30 + 10
    this.color = Ball.getRandomColor()
  }

  /** Static method that returns a random rgb string */
  static getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`
  }

  /** Draws the ball onto the canvas */
  draw() {
    ctx.beginPath()
    ctx.fillStyle = this.color
    ctx.arc(this.x, this.y, this.size, 0, this.endAngle)
    ctx.fill()
  }

  /** Update ball coords */
  update() {
    this.x += this.x_velocity
    this.y += this.y_velocity
  }
}

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  for (let ball of balls) {
    ball.update()
    ball.draw()
  }

  requestAnimationFrame(loop)
}

canvas.addEventListener('click', (e) => {
  const cords = {
    x: e.clientX,
    y: e.clientY,
  }

  const ball = new Ball(cords.x, cords.y)
  balls.push(ball)
  loop()
})
