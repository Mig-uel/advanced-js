const canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext('2d')

/** Ball Class */
class Ball {
  constructor(x, y) {
    this.x = x
    this.y = y
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
}

canvas.addEventListener('click', (e) => {
  const cords = {
    x: e.clientX,
    y: e.clientY,
  }

  new Ball(cords.x, cords.y).draw()
})
