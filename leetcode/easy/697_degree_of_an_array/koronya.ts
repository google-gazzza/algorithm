// [Easy] 697. Degree of an Array
// 697_degree_of_an_array

// https://leetcode.com/problems/degree-of-an-array
// Runtime: 96 ms, faster than 82.35% of TypeScript online submissions for Degree of an Array.
// Memory Usage: 43.7 MB, less than 23.53% of TypeScript online submissions for Degree of an Array.
const findDistance = (arr: number[], num: number): number => arr.lastIndexOf(num) - arr.indexOf(num)

function findShortestSubArray(nums: number[]): number {
  const numMap = new Map<number, number>()
  nums.forEach(num => {
    numMap.set(num, (numMap.get(num) || 0) + 1)
  })
  const numMapArr: [number, number][] = [...numMap]
  const countArr: number[] = numMapArr.map(item => item[1])
  const maxCount: number = Math.max(...countArr)
  if (maxCount === 1) {
    return 1
  }
  const maxNumArr: number[] = numMapArr.filter(item => item[1] === maxCount).map(item => item[0])

  return maxNumArr.reduce((acc, cur) => {
    const distance = findDistance(nums, cur)
    return acc > distance ? distance : acc
  }, nums.length) + 1
}
