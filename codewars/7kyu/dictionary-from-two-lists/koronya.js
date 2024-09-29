// [JS][7kyu] Dictionary from two lists
// dictionary-from-two-lists
// https://www.codewars.com/kata/5533c2a50c4fea6832000101/train/javascript

const createDict = (keys, values) => {
  const dict = {}
  keys.forEach((key, index) => {
    dict[key] = values[index] ?? null
  })
  return dict
}

createDict(['a', 'b', 'c'], [1, 2, 3])
createDict(['a', 'b', 'c'], [1, 2, 3, 4])
createDict(['a', 'b', 'c', 'd'], [1, 2, 3])
