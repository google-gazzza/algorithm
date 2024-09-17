// [Easy] 1042. Flower Planting With No Adjacent
// 1042_flower_planting_with_no_adjacent

// https://leetcode.com/problems/flower-planting-with-no-adjacent
// Runtime: 224 ms, faster than 30.22% of JavaScript online submissions for Flower Planting With No Adjacent.
// Memory Usage: 60.9 MB, less than 5.49% of JavaScript online submissions for Flower Planting With No Adjacent.
const FLOWER_TYPES_LENGTH = 4
const DEFAULT_FLOWER_TYPE = 1

const gardenNoAdj = function (n, paths) {
  const resultArr = []
  const pathMap = new Map()
  const setMapEachOther = (a, b) => {
    pathMap.get(a).push(b)
    pathMap.get(b).push(a)
  }
  const getNext = arr => {
    if (arr.length === 0) {
      return DEFAULT_FLOWER_TYPE
    }
    let candidateArr = Array.from({length: FLOWER_TYPES_LENGTH}).map((_, i) => i + 1)
    arr.forEach(num => {
      const excludeNum = resultArr[num - 1]
      candidateArr = candidateArr.filter(num => num !== excludeNum)
    })
    return Math.min(...candidateArr)
  }

  for (let i = 1; i <= n; i += 1 || 0) {
    pathMap.set(i, [])
  }
  paths.forEach(item => {
    setMapEachOther(item[0], item[1])
  })
  const sortedArr = [...pathMap]
  sortedArr.forEach(item => {
    const key = item[0]
    const arr = item[1]
    resultArr.push(getNext(arr.filter(item => item < key)))
  })

  return resultArr
}
