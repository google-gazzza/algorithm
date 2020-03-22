// https://leetcode.com/problems/contains-duplicate-ii
// Runtime: 64 ms, faster than 87.81% of JavaScript online submissions for Contains Duplicate II.
// Memory Usage: 49.7 MB, less than 5.26% of JavaScript online submissions for Contains Duplicate II.
const getShortestPath = arr => {
  const arrLen = arr.length
  let min = Number.MAX_SAFE_INTEGER
  let previousItem = arr[0]

  for (let i = 1; i < arrLen; i += 1) {
    const distance = arr[i] - previousItem
    previousItem = arr[i]
    if (distance < min) {
      min = distance
    }
  }

  return min
}

const containsNearbyDuplicate = (nums, k) => {
  const map = new Map()
  const numsLen = nums.length

  for (let i = 0; i < numsLen; i += 1) {
    const num = nums[i]
    const matchArr = map.get(num)

    if (matchArr && matchArr.length > 0) {
      matchArr.push(i)
    } else {
      map.set(num, [i])
    }
  }

  let totalShortestPath = Number.MAX_SAFE_INTEGER

  for (const [num, arr] of map) {
    if (arr.length > 1) {
      const shortestPath = getShortestPath(arr)
      if (shortestPath < totalShortestPath) {
        totalShortestPath = shortestPath
      }
    }
  }

  return totalShortestPath <= k
}
