// [TS] [Easy] 1394. Find Lucky Integer in an Array
// 1394_find_lucky_integer_in_an_array

// https://leetcode.com/problems/find-lucky-integer-in-an-array
// Runtime: 84 ms, faster than 100.00% of TypeScript online submissions for Find Lucky Integer in an Array.
// Memory Usage: 40 MB, less than 20.00% of TypeScript online submissions for Find Lucky Integer in an Array.
function findLucky(arr: number[]): number {
  const numMap = new Map<number, number>()
  arr.forEach(num => {
    numMap.set(num, (numMap.get(num) || 0) + 1)
  })
  let max: number = -1
  numMap.forEach((value: number, key: number) => {
    if (key === value && key > max) {
      max = key
    }
  })

  return max
}
