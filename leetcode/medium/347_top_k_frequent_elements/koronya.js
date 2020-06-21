// [Medium] 347. Top K Frequent Elements
// 347_top_k_frequent_elements

// https://leetcode.com/problems/top-k-frequent-elements/
// Runtime: 72 ms, faster than 86.57% of JavaScript online submissions for Top K Frequent Elements.
// Memory Usage: 38 MB, less than 66.97% of JavaScript online submissions for Top K Frequent Elements.
const topKFrequent = (nums, k) => {
  const numsMap = new Map()
  nums.forEach(num => numsMap.set(num, (numsMap.get(num) | 0) + 1))
  const sortedMap = [...numsMap]
  sortedMap.sort((a, b) => b[1] - a[1])
  const resultArr = []
  for (let i = 0; i < k; i = i + 1 | 0) {
    resultArr.push(sortedMap[i][0])
  }

  return resultArr
}
