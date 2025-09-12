// [JS][7kyu] Flatten
// flatten
// https://www.codewars.com/kata/5250a89b1625e5decd000413/train/javascript

const flatten = (array, overOneLevel = false) => {
  if (array.length === 0) {
    return []
  }
  if (overOneLevel) {
    return array
  }
  if (Array.isArray(array) && array.length > 0) {
    return array.reduce((acc, cur) => acc.concat(flatten(cur, true)), [])
  }
  return Array.isArray(array) ? [] : [array]
}

// flatten([])
// flatten([1, 2, 3])
// flatten([
//   [1, 2, 3],
//   ['a', 'b', 'c'],
//   [1, 2, 3],
// ])
// flatten([[3, 4, 5], [[9, 9, 9]], ['a,b,c']])
// flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]])

// flatten([[3, 4, 5], [[9, 9, 9]], ['a,b,c']])
