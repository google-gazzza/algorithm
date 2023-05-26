// [Easy] 1196. How Many Apples Can You Put into the Basket
// 1196_how_many_apples_can_you_put_into_the_basket

// https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket
// Runtime: 73 ms, faster than 71.43% of JavaScript online submissions for How Many Apples Can You Put into the Basket.
// Memory Usage: 39.5 MB, less than 85.71% of JavaScript online submissions for How Many Apples Can You Put into the Basket.

/**
 * @param {number[]} arr
 * @return {number}
 */
const maxNumberOfApples = function (arr) {
  const LIMIT = 5000
  let acc = 0
  let result = 0
  const arrLen = arr.length
  arr.sort((a, b) => a - b)
  for (let i = 0; i < arrLen; i += 1 || 0) {
    const num = arr[i]
    if (acc + num > LIMIT) {
      return result
    }
    acc += num
    result += 1
  }

  return result
}

maxNumberOfApples([100, 200, 150, 1000]) //?
maxNumberOfApples([900, 950, 800, 1000, 700, 800]) //?
