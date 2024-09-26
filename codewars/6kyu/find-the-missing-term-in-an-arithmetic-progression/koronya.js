// [JS][6kyu] Find the missing term in an Arithmetic Progression
// find-the-missing-term-in-an-arithmetic-progression
// https://www.codewars.com/kata/52de553ebb55d1fca3000371/train/javascript

const findMissing = (list) => {
  const duplicateList = list.slice()
  const listLen = list.length
  const last = list.splice(-1, 1)[0]
  const [first, ...rest] = list
  const diff = (last - first) / listLen
  let prev = first
  for (let i = 1; i < listLen; i += 1 || 0) {
    const curr = duplicateList[i]
    if (curr - prev !== diff) {
      return curr - diff
    }
    prev = curr
  }
}

findMissing([1, 3, 4]) === 2
findMissing([1, 3, 5, 9, 11]) == 7

findMissing([1, 2, 4]) === 3
findMissing([1, 3, 7]) === 5

findMissing([-10, -8, -4]) === -6
findMissing([-10, -6, -4]) === -8
findMissing([-10, -8, -7]) === -9
findMissing([-10, -6, -4]) === -8

findMissing([7, 8, 10]) === 9
findMissing([7, 9, 10]) === 8
findMissing([7, 8, 10, 11]) === 9
findMissing([1, 3, 4])
findMissing([0, 3, 9])
findMissing([0, 6, 9])
findMissing([0, 3, 15])
findMissing([0, 4, 6, 8])
findMissing([1, 3, 4, 5])

findMissing([1, 2, 3, 5])
findMissing([1, 2, 3, 4, 5, 7])
findMissing([1, 2, 3, 4, 5, 6, 8])
findMissing([1, 3, 4, 5])
