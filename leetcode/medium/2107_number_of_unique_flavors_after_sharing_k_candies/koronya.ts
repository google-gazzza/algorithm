// [Medium] 2107. Number of Unique Flavors After Sharing K Candies
// 2107_number_of_unique_flavors_after_sharing_k_candies

// https://leetcode.com/problems/number-of-unique-flavors-after-sharing-k-candies
// Runtime: 743 ms, faster than 100.00% of TypeScript online submissions for Number of Unique Flavors After Sharing K Candies.
// Memory Usage: 66.2 MB, less than 100.00% of TypeScript online submissions for Number of Unique Flavors After Sharing K Candies.


function shareCandies(candies: number[], k: number): number {
  if (k === 0) {
    const candySet = new Set<number>()
    candies.forEach((candy) => candySet.add(candy))
    return candySet.size
  }

  let resultMax: number = 0
  const candiesLen: number = candies.length
  const candyMap = new Map<number, number>()
  const slidingWindowArr: number[] = []
  const getMap = (num: number): number => candyMap.get(num) || 0
  const increaseMap = (num: number) => candyMap.set(num, getMap(num) + 1)
  const decreaseMap = (num: number) => {
    const newValue = getMap(num) - 1
    if (newValue === 0) {
      candyMap.delete(num)
    } else {
      candyMap.set(num, newValue)
    }
  }
  const setMax = () => (resultMax = Math.max(resultMax, candyMap.size))

  for (let i: number = 0; i < candiesLen; i += 1) {
    increaseMap(candies[i])
  }
  for (let i: number = 0; i < k; i += 1) {
    const candy: number = candies[i]
    decreaseMap(candy)
    slidingWindowArr.push(candy)
  }
  setMax()

  for (let i: number = k; i < candiesLen; i += 1) {
    const candy: number = candies[i]
    increaseMap(slidingWindowArr.shift())
    decreaseMap(candy)
    slidingWindowArr.push(candy)
    setMax()
  }

  return resultMax
}
