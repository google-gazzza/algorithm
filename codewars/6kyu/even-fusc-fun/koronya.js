// [JS][6kyu] Even fusc fun
// even-fusc-fun
// https://www.codewars.com/kata/5981821bcf492eb87b000034/train/javascript

const fuscMap = new Map([
  [1, 1],
  [2, 1],
  [3, 2],
])

const getFusc = (n) => {
  if (fuscMap.has(n)) {
    return fuscMap.get(n)
  }
  if (n % 2 === 0) {
    const result = getFusc(n / 2)
    fuscMap.set(n, result)
    return result
  }
  const result = getFusc((n - 1) / 2) + getFusc((n + 1) / 2)
  fuscMap.set(n, result)
  return result
}

const closestEvenFusc = (n) => {
  while (getFusc(n) % 2 !== 0) {
    n += 1
  }
  return n
}

closestEvenFusc(1) === 3
closestEvenFusc(2) === 3
closestEvenFusc(3) === 3
closestEvenFusc(4) === 6
