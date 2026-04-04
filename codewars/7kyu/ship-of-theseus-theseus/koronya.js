// [JS][7kyu] Ship of Theseus  Theseus
// ship-of-theseus-theseus
// https://www.codewars.com/kata/69b83710b26939b35fd10429/train/javascript

const getDiff = (a, b) => {
  let diff = 0
  const aLength = a.length
  for (let i = 0; i < aLength; i += 1) {
    if (a[i] !== b[i]) {
      diff += 1
    }
  }
  return diff
}

const shipOfTheseus = (ship) => {
  const shipLength = ship.length
  let prev = ship[0]
  for (let i = 1; i < shipLength; i += 1) {
    const diff = getDiff(prev, ship[i])
    if (diff !== 1) {
      return false
    }
    prev = ship[i]
  }
  return true
}

// shipOfTheseus([
//   ['a', 'b', 'c'],
//   ['x', 'b', 'c'],
//   ['x', 'y', 'c'],
//   ['x', 'y', 'z'],
// ])

// shipOfTheseus([
//   ['a', 'b', 'c'],
//   ['x', 'y', 'c'],
// ])

// shipOfTheseus([
//   ['a', 'b'],
//   ['a', 'b'],
// ])

// shipOfTheseus([
//   ['g', 'w', 'x', 'd', 'o', 'r'],
//   ['g', 'w', 'x', 'd', 'o', 'v'],
//   ['g', 'w', 'x', 'w', 'o', 'v'],
//   ['g', 'w', 'x', 'w', 'o', 'v'],
//   ['g', 'w', 's', 'w', 'o', 'v'],
// ])
