// [JS][7kyu] Functions of Integers on Cartesian Plane
// functions-of-integers-on-cartesian-plane
// https://www.codewars.com/kata/559e3224324a2b6e66000046/train/javascript

const sumin = (n) => {
  let sum = 0
  for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      sum += Math.min(i, j)
    }
  }
  return sum
}
const sumax = (n) => {
  let sum = 0
  for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      sum += Math.max(i, j)
    }
  }
  return sum
}
const sumsum = (n) => {
  let sum = 0
  for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      sum += i + j
    }
  }
  return sum
}

sumin(5) === 55
sumax(8) === 372
sumsum(8) === 576
sumin(15) === 1240
