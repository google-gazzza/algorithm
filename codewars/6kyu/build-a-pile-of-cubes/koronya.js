// [JS][6kyu] Build a pile of Cubes
// build-a-pile-of-cubes
// https://www.codewars.com/kata/5592e3bd57b64d00f3000047/train/javascript

const findNb = (m) => {
  const sqrt = Math.sqrt(m)
  const n = (-1 + Math.sqrt(1 + 8 * sqrt)) / 2
  if (n % 1 === 0) {
    return n
  }
  return -1
}

findNb(4183059834009)
findNb(24723578342962)
