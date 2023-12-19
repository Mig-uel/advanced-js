class Triangle {
  getArea() {
    return (this.a * this.b) / 2
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2)
  }
}

const triangleA = new Triangle()
triangleA.a = 3
triangleA.b = 4
triangleA.getArea()
triangleA.getHypotenuse()
