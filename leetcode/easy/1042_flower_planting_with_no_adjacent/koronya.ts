// [Easy] 1042. Flower Planting With No Adjacent
// 1042_flower_planting_with_no_adjacent

// https://leetcode.com/problems/flower-planting-with-no-adjacent
// Runtime: 220 ms, faster than 66.67% of TypeScript online submissions for Flower Planting With No Adjacent.
// Memory Usage: 61.1 MB, less than 16.67% of TypeScript online submissions for Flower Planting With No Adjacent.
const FLOWER_TYPES_LENGTH: number = 4
const DEFAULT_FLOWER_TYPE: number = 1

const gardenNoAdj = function (n: number, paths: number[][]): number[] {
  const resultArr: number[] = []
  const pathMap = new Map<number, number[]>()
  const setMapEachOther: (a: number, b: number) => void = (a, b) => {
    pathMap.get(a)!.push(b)
    pathMap.get(b)!.push(a)
  }
  const getNext: (arr: number[]) => number = arr => {
    if (arr.length === 0) {
      return DEFAULT_FLOWER_TYPE
    }
    let candidateArr: number[] = Array.from({length: FLOWER_TYPES_LENGTH}).map((_, i) => i + 1)
    arr.forEach(num => {
      const excludeNum: number = resultArr[num - 1]
      candidateArr = candidateArr.filter(num => num !== excludeNum)
    })
    return Math.min(...candidateArr)
  }

  for (let i: number = 1; i <= n; i += 1 || 0) {
    pathMap.set(i, [])
  }
  paths.forEach(item => {
    setMapEachOther(item[0], item[1])
  })
  const sortedArr: [number, number[]][] = [...pathMap]
  sortedArr.forEach(item => {
    const key: number = item[0]
    const arr: number[] = item[1]
    resultArr.push(getNext(arr.filter(item => item < key)))
  })

  return resultArr
}
