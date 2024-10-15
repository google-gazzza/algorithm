// [JS][7kyu] What dominates your array?
// what-dominates-your-array
// https://www.codewars.com/kata/559e10e2e162b69f750000b4/train/javascript

const dominator = (arr) => {
  const half = arr.length / 2
  const numMap = new Map()
  arr.forEach((num) => {
    numMap.set(num, (numMap.get(num) || 0) + 1)
  })
  const sortedArr = [...numMap].sort((a, b) => b[1] - a[1])

  return sortedArr[0][1] > half ? sortedArr[0][0] : -1
}

dominator([3, 4, 3, 2, 3, 1, 3, 3]) === 3
dominator([1, 2, 3, 4, 5]) === -1
dominator([1, 1, 1, 2, 2, 2]) === -1
dominator([1, 1, 1, 2, 2, 2, 2]) === 2
