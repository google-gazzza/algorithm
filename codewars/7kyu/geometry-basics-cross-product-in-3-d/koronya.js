// [JS][7kyu] Geometry Basics: Cross Product in 3D
// geometry-basics-cross-product-in-3-d
// https://www.codewars.com/kata/58e440d8acfd3edfb2000aee/train/javascript

const crossProduct = (v1, v2) => {
  const { x: x1, y: x2, z: x3 } = v1
  const { x: y1, y: y2, z: y3 } = v2
  const crossX = x2 * y3 - x3 * y2
  const crossY = x3 * y1 - x1 * y3
  const crossZ = x1 * y2 - x2 * y1
  return new Vector(crossX, crossY, crossZ)
}

crossProduct(new Vector(2, 0, -1), new Vector(0, -2, 1))
crossProduct(new Vector(0, -2, 1), new Vector(2, 0, -1))
crossProduct(new Vector(1, 1, 1), new Vector(2, -2, 2))
crossProduct(new Vector(7, 2.5, -3), new Vector(0.4, -0.9, 0.2))
