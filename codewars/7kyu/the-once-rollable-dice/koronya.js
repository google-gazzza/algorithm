// [JS][7kyu] The once rollable dice
// the-once-rollable-dice
// https://www.codewars.com/kata/54e4aa695c8a4c4cee0004d4/train/javascript

class Character {
  constructor(name, opness) {
    this.name = name
    this.opness = opness
  }
  attack() {
    return this.opness + ~~(Math.random() * 20) + 1
  }
}

const balthazaar = new Character('Balthazaar', 30)
balthazaar.attack()
balthazaar.attack()
balthazaar.attack()
