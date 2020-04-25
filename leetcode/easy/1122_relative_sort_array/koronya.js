// https://leetcode.com/problems/relative-sort-array
// Runtime: 52 ms, faster than 88.77% of JavaScript online submissions for Relative Sort Array.
// Memory Usage: 34.2 MB, less than 100.00% of JavaScript online submissions for Relative Sort Array.

const relativeSortArray = (arr1, arr2) => {
  const resultArr = []
  const pushToResultArrN = (item, N) => {
    for (let i = 0; i < N; i = i + 1 | 0) {
      resultArr.push(item)
    }
  }
  const overlapSet = new Set()
  const overlatArr1Map = new Map()
  const uniqueArr1Map = new Map()
  arr2.map(item => overlapSet.add(item))
  arr1.map(item => {
    if (overlapSet.has(item)) {
      overlatArr1Map.set(item, (overlatArr1Map.get(item) | 0) + 1)
    } else {
      uniqueArr1Map.set(item, (uniqueArr1Map.get(item) | 0) + 1)
    }
  })
  arr2.map(item => pushToResultArrN(item, overlatArr1Map.get(item)));
  const uniqueArr1 = [...uniqueArr1Map]
  uniqueArr1.sort((a, b) => a[0] - b[0])
  uniqueArr1.map(item => pushToResultArrN(item[0], item[1]))
  return resultArr
}
