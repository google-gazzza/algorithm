// [JS][7kyu] Sum of array singles
// sum-of-array-singles
// https://www.codewars.com/kata/59f11118a5e129e591000134/train/javascript

const repeats = (arr) => {
  const map = new Map()
  arr.forEach((element) => {
    map.set(element, (map.get(element) || 0) + 1)
  })

  return [...map].filter(([_, value]) => value === 1).reduce((acc, [key, _]) => acc + key, 0)
}

repeats([4, 5, 7, 5, 4, 8]) === 15
repeats([9, 10, 19, 13, 19, 13]) === 19
repeats([16, 0, 11, 4, 8, 16, 0, 11]) === 12
repeats([5, 17, 18, 11, 13, 18, 11, 13]) === 22
repeats([5, 10, 19, 13, 10, 13]) === 24
