// [Medium] 2107. Number of Unique Flavors After Sharing K Candies
// 2107_number_of_unique_flavors_after_sharing_k_candies

// https://leetcode.com/problems/number-of-unique-flavors-after-sharing-k-candies
// Runtime: 749 ms, faster than 14.29% of JavaScript online submissions for Number of Unique Flavors After Sharing K Candies.
// Memory Usage: 65 MB, less than 14.29% of JavaScript online submissions for Number of Unique Flavors After Sharing K Candies.

/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
const shareCandies = function (candies, k) {
  if (k === 0) {
    const candySet = new Set()
    candies.forEach((candy) => candySet.add(candy))
    return candySet.size
  }

  let resultMax = 0
  const candiesLen = candies.length
  const candyMap = new Map()
  const slidingWindowArr = []
  const getMap = (num) => candyMap.get(num) || 0
  const increaseMap = (num) => candyMap.set(num, getMap(num) + 1)
  const decreaseMap = (num) => {
    const newValue = getMap(num) - 1
    if (newValue === 0) {
      candyMap.delete(num)
    } else {
      candyMap.set(num, newValue)
    }
  }
  const setMax = () => (resultMax = Math.max(resultMax, candyMap.size))

  for (let i = 0; i < candiesLen; i += 1 || 0) {
    increaseMap(candies[i])
  }
  for (let i = 0; i < k; i += 1 || 0) {
    const candy = candies[i]
    decreaseMap(candy)
    slidingWindowArr.push(candy)
  }
  setMax()

  for (let i = k; i < candiesLen; i += 1 || 0) {
    const candy = candies[i]
    increaseMap(slidingWindowArr.shift())
    decreaseMap(candy)
    slidingWindowArr.push(candy)
    setMax()
  }

  return resultMax
}

// shareCandies([1, 2, 2, 3, 4, 3], 3) //?
// shareCandies([2, 2, 2, 2, 3, 3], 2) //?
// shareCandies([2, 4, 5], 0) //?
shareCandies([3, 1, 2, 2], 0) //?
