// [Easy] 1636. Sort Array by Increasing Frequency
// 1636_sort_array_by_increasing_frequency

// https://leetcode.com/problems/sort-array-by-increasing-frequency
// Runtime: 88 ms, faster than 94.08% of JavaScript online submissions for Sort Array by Increasing Frequency.
// Memory Usage: 40.7 MB, less than 60.95% of JavaScript online submissions for Sort Array by Increasing Frequency.
const customSort = (a, b) => {
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

const frequencySort = function (nums) {
  const resultArr = []
  const numMap = new Map()
  nums.forEach(num => {
    numMap.set(num, (numMap.get(num) || 0) + 1)
  })
  const sortedArr = [...numMap].sort(customSort)
  sortedArr.forEach(item => {
    const [num, count] = item
    for (let i = 0; i < count; i += 1 || 0) {
      resultArr.push(num)
    }
  })

  return resultArr
}
