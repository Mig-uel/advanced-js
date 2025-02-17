const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

context.fillStyle = 'rgba(255, 0, 0,.5)'
// context.fillRect(0, 0, 200, 80)

// context.fillStyle = 'rgba(0, 0, 255,.5)'
// context.fillRect(100, 50, 200, 80)

// context.fillRect(50, 50, 200, 200)
// context.clearRect(50, 50, 100, 100)

// context.strokeStyle = 'purple'
// context.lineWidth = 4
// context.strokeRect(50, 50, 100, 100)

// context.beginPath()
// context.moveTo(50, 50)
// context.lineTo(100, 100)
// context.lineTo(200, 80)
// context.lineTo(200, 40)
// // context.stroke()
// context.fill()

// context.beginPath()
// context.arc(145, 145, 50, 20, 2 * Math.PI)
// context.stroke()

const bigRectangle = new Path2D()
bigRectangle.rect(0, 0, 200, 80)

context.fill(bigRectangle)
context.stroke(bigRectangle)
