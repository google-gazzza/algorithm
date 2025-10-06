// [JS][7kyu] Spinning Rings
// spinning-rings
// https://www.codewars.com/kata/59afff65f1c8274f270020f5/train/javascript

const spinningRings = (innerMax, outerMax) => {
  let count = 1
  let inner = innerMax
  let outer = 1
  while (inner !== outer) {
    inner = inner === 0 ? innerMax : inner - 1
    outer = outer === outerMax ? 0 : outer + 1
    count += 1
  }
  return count
}

spinningRings(3, 2) === 2
spinningRings(2, 3) === 5
spinningRings(1, 1) === 1
spinningRings(2, 2) === 3
spinningRings(3, 3) === 2
