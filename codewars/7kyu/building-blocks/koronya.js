// [JS][7kyu] Building blocks
// building-blocks
// https://www.codewars.com/kata/55b75fcf67e558d3750000a3/train/javascript

class Block {
  constructor(data) {
    const [width, length, height] = data
    this.width = width
    this.length = length
    this.height = height
  }

  getWidth() {
    return this.width
  }
  getLength() {
    return this.length
  }
  getHeight() {
    return this.height
  }
  getVolume() {
    return this.width * this.length * this.height
  }
  getSurfaceArea() {
    return 2 * (this.width * this.length + this.width * this.height + this.length * this.height)
  }
}

const block = new Block([2, 4, 6])

block.getWidth() === 2
block.getLength() === 4
block.getHeight() === 6
block.getVolume() === 48
block.getSurfaceArea() === 88
