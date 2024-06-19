class Circle {
  #radius // private class field

  constructor(radius) {
    this.#radius = radius
  }

  get radius() {
    return this.#radius
  }

  // private method
  #privateMethod() {
    console.log('PRIVATE METHOD CALLED')
  }

  publicMethod() {
    this.#privateMethod()
  }
}

const c = new Circle(100)
c.publicMethod()

console.log(c.radius)
