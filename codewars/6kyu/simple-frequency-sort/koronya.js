// [JS][6kyu] Simple frequency sort
// simple-frequency-sort
// https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc/train/javascript

const solve = (arr) => {
  arr.sort((a, b) => a - b)
  const countMap = new Map()
  arr.forEach((v) => {
    countMap.set(v, (countMap.get(v) || 0) + 1)
  })
  arr.sort((a, b) => {
    const countA = countMap.get(a)
    const countB = countMap.get(b)
    if (countA === countB) {
      return a - b
    }
    return countB - countA
  })

  return arr
}
