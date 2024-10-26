// [JS][7kyu] Area of a Circle
// area-of-a-circle
// https://www.codewars.com/kata/537baa6f8f4b300b5900106c/train/javascript

const circleArea = (radius) => {
  if (radius <= 0) {
    throw new Error('Radius must be positive')
  }
  return Math.PI * radius ** 2
}

circleArea(43.2673) // returns 5881.248  (± 0.01)
circleArea(68) // returns 14526.724 (± 0.01)
circleArea(0) // throws Error
circleArea(-1) // throws Error
