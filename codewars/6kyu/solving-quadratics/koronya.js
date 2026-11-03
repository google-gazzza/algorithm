// [JS][6kyu] Solving Quadratics
// solving-quadratics
// https://www.codewars.com/kata/53d8aea2e584dd9e67000ae6/train/javascript

const solveQuadratic = (a, b, c) => {
  if (a === 0) {
    return b === 0 ? undefined : [-c / b]
  }
  if (c === 0) {
    return b === 0 ? [0] : [0, -b / a]
  }

  const ddd = b ** 2 - 4 * a * c
  if (ddd < 0) {
    return undefined
  }

  const aaa = -b / (2 * a)

  if (ddd === 0) {
    return [aaa]
  }

  const ccc = Math.sqrt(ddd) / (2 * a)
  return [aaa + ccc, aaa - ccc]
}

// solveQuadratic(1, 2, 3)
// solveQuadratic(-1, -2, -3)
// solveQuadratic(1, 2, 0)
// solveQuadratic(1, 0, 0)
// solveQuadratic(-1, -2, 3)
// solveQuadratic(-1, -2, -3)
