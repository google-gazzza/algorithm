// [JS][7kyu] Simple Fun #124: Lamps
// simple-fun-124-lamps
// https://www.codewars.com/kata/58a3c1f12f949e21b300005c/train/javascript

const lamps = (a) => {
  const sumA = a.reduce((acc, cur, index) => {
    if (index % 2 === 0) {
      return cur === 1 ? acc + 1 : acc
    } else {
      return cur === 1 ? acc : acc + 1
    }
  }, 0)
  const sumB = a.reduce((acc, cur, index) => {
    if (index % 2 === 1) {
      return cur === 1 ? acc + 1 : acc
    } else {
      return cur === 1 ? acc : acc + 1
    }
  }, 0)
  return Math.min(sumA, sumB)
}

lamps([1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1]) === 5
lamps([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) === 6
lamps([1, 0, 1]) === 0
lamps([1, 0, 1, 0]) === 0
lamps([0, 1, 0, 1, 0]) === 0
lamps([1, 0, 1, 0, 0, 1, 0, 1]) === 4
lamps([1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0]) === 5
