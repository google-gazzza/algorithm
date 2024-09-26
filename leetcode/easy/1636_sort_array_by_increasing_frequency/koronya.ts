// [Easy] 1636. Sort Array by Increasing Frequency
// 1636_sort_array_by_increasing_frequency

// https://leetcode.com/problems/sort-array-by-increasing-frequency
// Runtime: 88 ms, faster than 100.00% of TypeScript online submissions for Sort Array by Increasing Frequency.
// Memory Usage: 41.2 MB, less than 57.14% of TypeScript online submissions for Sort Array by Increasing Frequency.
const customSort = (a: [number, number], b: [number, number]): number => {
  if (a[1] > b[1]) {
    return 1
  } else if (a[1] < b[1]) {
    return -1
  } else {
    if (a[0] > b[0]) {
      return -1
    } else {
      return 1
    }
  }
}

function frequencySort (nums: number[]): number[] {
  const resultArr: number[] = []
  const numMap = new Map<number, number>()
  nums.forEach(num => {
    numMap.set(num, (numMap.get(num) || 0) + 1)
  })
  const sortedArr = [...numMap].sort(customSort)
  sortedArr.forEach(item => {
    const [num, count] = item
    for (let i: number = 0; i < count; i += 1) {
      resultArr.push(num)
    }
  })

  return resultArr
}
