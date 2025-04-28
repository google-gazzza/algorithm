// [JS][7kyu] zero-balanced Array
// zero-balanced-array
// https://www.codewars.com/kata/59c6fa6972851e8959000067/train/javascript

const ìsZeroBalanced = (n) => {
  if (n.length === 0) {
    return false
  }
  const isZeroSum = n.reduce((acc, cur) => acc + cur, 0)
  if (isZeroSum !== 0) {
    return false
  }
  const numMap = new Map()
  const minusNumMap = new Map()
  n.forEach((num) => {
    if (num > 0) {
      numMap.set(num, (numMap.get(num) || 0) + 1)
    } else if (num < 0) {
      minusNumMap.set(num, (minusNumMap.get(num) || 0) + 1)
    }
  })
  return (
    numMap.size === minusNumMap.size &&
    [...numMap].every(([key, value]) => {
      const minusKey = -key
      return minusNumMap.has(minusKey) && value === minusNumMap.get(minusKey)
    })
  )
}

ìsZeroBalanced([1, -1, 2, -2])
ìsZeroBalanced([0, 1, -1])

ìsZeroBalanced([3])
ìsZeroBalanced([3, -2, -1])
ìsZeroBalanced([1, 1, 1, 1, -1, 3, -3, -3])

ìsZeroBalanced([])
