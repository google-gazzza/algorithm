// [JS][7kyu] Thinkful - Object Drills: Quarks
// thinkful-object-drills-quarks
// https://www.codewars.com/kata/5882b052bdeafec15e0000e6/train/javascript

class Quark {
  constructor(color, flavor) {
    this.color = color
    this.flavor = flavor
    this.baryon_number = 1 / 3
  }

  interact(other) {
    const tempColor = this.color
    const tempFlavor = this.flavor
    this.color = other.color
    this.flavor = other.flavor
    other.color = tempColor
    other.flavor = tempFlavor
  }
}

const q1 = new Quark('red', 'up')
q1.color
q1.flavor
const q2 = new Quark('blue', 'strange')
q2.color
q2.flavor
q2.baryon_number

q1.interact(q2)
q1.color
q1.flavor
q2.color
q2.flavor
