// [JS][6kyu] Array.diff
// array-diff
// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

const arrayDiff = (a, b) => {
  const bSet = new Set(b)
  return a.filter((item) => !bSet.has(item))
}

arrayDiff([1, 2], [1])
arrayDiff([1, 2, 3], [1, 3])
arrayDiff([1, 2, 2, 2, 3], [2])
arrayDiff([1, 2, 2, 2, 3], [3])
