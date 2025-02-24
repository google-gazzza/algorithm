// [JS][5kyu] Vector class
// vector-class
// https://www.codewars.com/kata/526dad7f8c0eb5c4640000a4/train/javascript

class Vector {
  constructor(components) {
    this.components = components
    this.componentsLen = components.length
  }
  add(vector) {
    if (this.componentsLen !== vector.components.length) {
      throw new Error('The dimensions are not the same')
    }
    return new Vector(this.components.map((v, i) => v + vector.components[i]))
  }
  subtract(vector) {
    if (this.componentsLen !== vector.components.length) {
      throw new Error('The dimensions are not the same')
    }
    return new Vector(this.components.map((v, i) => v - vector.components[i]))
  }
  dot(vector) {
    if (this.componentsLen !== vector.components.length) {
      throw new Error('The dimensions are not the same')
    }
    return this.components.reduce((acc, cur, i) => acc + cur * vector.components[i], 0)
  }
  norm() {
    return Math.sqrt(this.components.reduce((acc, cur) => acc + cur ** 2, 0))
  }

  equals(vector) {
    return this.components.every((v, i) => v === vector.components[i])
  }
  toString() {
    return `(${this.components.join(',')})`
  }
}

const a = new Vector([1, 2, 3])
const b = new Vector([3, 4, 5])
const c = new Vector([5, 6, 7, 8])

a.add(b) // should return a new Vector([4, 6, 8])
a.subtract(b) // should return a new Vector([-2, -2, -2])
a.dot(b) // should return 1*3 + 2*4 + 3*5 = 26
a.norm() // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
a.add(c) // throws an error
