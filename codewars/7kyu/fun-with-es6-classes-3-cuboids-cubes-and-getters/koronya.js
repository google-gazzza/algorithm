// [JS][7kyu] Fun with ES6 Classes #3 - Cuboids, Cubes and Getters
// fun-with-es6-classes-3-cuboids-cubes-and-getters
// https://www.codewars.com/kata/56fbdda707cff41b68000de2/train/javascript

class Cuboid {
  constructor(length, width, height) {
    this._length = length
    this._width = width
    this._height = height
    this.setVolume()
    this.setSurfaceArea()
  }

  setVolume() {
    this._volume = this._length * this._width * this._height
  }

  setSurfaceArea() {
    this._surfaceArea = 2 * (this._length * this._width + this._width * this._height + this._height * this._length)
  }

  modifyValue() {
    this.setVolume()
    this.setSurfaceArea()
  }

  get length() {
    return this._length
  }

  set length(length) {
    this._length = length
    this.modifyValue()
  }

  get width() {
    return this._width
  }

  set width(width) {
    this._width = width
    this.modifyValue()
  }

  get height() {
    return this._height
  }

  set height(height) {
    this._height = height
    this.modifyValue()
  }

  get volume() {
    return this._volume
  }

  get surfaceArea() {
    return this._surfaceArea
  }
}

class Cube extends Cuboid {
  constructor(length) {
    super(length, length, length)
  }
}

Test = {
  assertEquals: (a, b) => a === b,
}

const cuboid = new Cuboid(1, 2, 3)
Test.assertEquals(cuboid.length, 1)
Test.assertEquals(cuboid.width, 2)
Test.assertEquals(cuboid.height, 3)
Test.assertEquals(cuboid.volume, 6)
Test.assertEquals(cuboid.surfaceArea, 22)
cuboid.length = 4
Test.assertEquals(cuboid.volume, 24)
Test.assertEquals(cuboid.surfaceArea, 52)
cuboid.width = 5
Test.assertEquals(cuboid.volume, 60)
Test.assertEquals(cuboid.surfaceArea, 94)
cuboid.height = 6
Test.assertEquals(cuboid.volume, 120)
Test.assertEquals(cuboid.surfaceArea, 148)
;[cuboid.length, cuboid.width, cuboid.height] = [7, 8, 9]
Test.assertEquals(cuboid.volume, 504)
Test.assertEquals(cuboid.surfaceArea, 382)

var cube = new Cube(1)
Test.assertEquals(cube.length, 1)
Test.assertEquals(cube.width, 1)
Test.assertEquals(cube.height, 1)
Test.assertEquals(cube.volume, 1)
Test.assertEquals(cube.surfaceArea, 6)
cube.length = cube.width = cube.height = 2
Test.assertEquals(cube.volume, 8)
Test.assertEquals(cube.surfaceArea, 24)
cube.length = cube.width = cube.height = 3
Test.assertEquals(cube.volume, 27)
Test.assertEquals(cube.surfaceArea, 54)
cube.length = cube.width = cube.height = 5
Test.assertEquals(cube.volume, 125)
Test.assertEquals(cube.surfaceArea, 150)
cube.length = cube.width = cube.height = 10
Test.assertEquals(cube.volume, 1000)
Test.assertEquals(cube.surfaceArea, 600)
