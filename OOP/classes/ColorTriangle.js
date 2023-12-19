import { Triangle } from './Triangle'

export class ColorTriangle extends Triangle {
  // calls parent constructor with a,b values
  constructor(a, b, color) {
    super(a, b)
    this.color = color
  }
}
