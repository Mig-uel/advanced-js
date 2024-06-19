class Circle {
  static allowedColors = new Set(['red', 'green', 'blue'])

  constructor(radius, color) {
    this._radius = radius
    this.setColor(color)
  }

  setColor(color) {
    if (!Circle.allowedColors.has(color))
      throw new Error(`${color} color is not allowed`)
    this._color = color
  }

  get diameter() {
    return this._radius * 2
  }

  get color() {
    return this._color
  }

  set radius(value) {
    if (value < 0) throw new Error('Radius cannot be negative')

    this._radius = value
  }

  set color(color) {
    this.setColor(color)
  }
}

const c = new Circle(4, 'red')
