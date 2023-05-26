// [JS][7kyu] Check if a triangle is an equable triangle!
// check-if-a-triangle-is-an-equable-triangle
// https://www.codewars.com/kata/57d0089e05c186ccb600035e/train/javascript

const equableTriangle = (a, b, c) => {
  const s = (a + b + c) / 2
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c))
  return area === a + b + c
}

equableTriangle(5, 12, 13) === true
equableTriangle(2, 3, 4) === false
equableTriangle(6, 8, 10) === true
equableTriangle(7, 15, 20) === true
equableTriangle(17, 17, 30) === false
