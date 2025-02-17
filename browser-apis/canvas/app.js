const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

context.fillStyle = 'rgba(255, 0, 0,.5)'
context.fillRect(0, 0, 200, 80)

context.fillStyle = 'rgba(0, 0, 255,.5)'
context.fillRect(100, 50, 200, 80)
