// [JS][6kyu] Potion Class 101
// potion-class-101
// https://www.codewars.com/kata/5981ff1daf72e8747d000091/train/javascript

class Potion {
  constructor(color, volume) {
    this.color = color
    this.volume = volume
  }

  mix(otherPotion) {
    const newColor = this.color.map((color, index) =>
      Math.ceil((color * this.volume + otherPotion.color[index] * otherPotion.volume) / (this.volume + otherPotion.volume)),
    )
    const newVolume = this.volume + otherPotion.volume
    return new Potion(newColor, newVolume)
  }
}

const p1 = new Potion([153, 210, 199], 32)
const p2 = new Potion([135, 34, 0], 17)
const p3 = new Potion([18, 19, 20], 25)
const p4 = new Potion([174, 211, 13], 4)
const p5 = new Potion([255, 23, 148], 19)
const p6 = new Potion([51, 102, 51], 6)

const a = p1.mix(p2)
const b = p1.mix(p3).mix(p5)
