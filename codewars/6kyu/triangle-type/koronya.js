// [JS][6kyu] Triangle type
// triangle-type
// https://www.codewars.com/kata/53907ac3cd51b69f790006c5/train/javascript

/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/

const isNotTriangle = (a, b, c) => a + b <= c || b + c <= a || c + a <= b

const triangleType = (a, b, c) => {
  if (isNotTriangle(a, b, c) === true) {
    return 0
  }
  const [x, y, z] = [a, b, c].sort((a, b) => a - b)
  const sumOfSquare = x ** 2 + y ** 2
  const zSquare = z ** 2

  return sumOfSquare === zSquare ? 2 : sumOfSquare > zSquare ? 1 : 3
}

const test = (sides, expected) => {
  const actual = triangleType(...sides)
  return actual === expected
}

test([7, 3, 2], 0) // Not triangle
test([2, 4, 6], 0) // Not triangle
test([8, 5, 7], 1) // Acute
test([3, 4, 5], 2) // Right
test([7, 12, 8], 3) // Obtuse
