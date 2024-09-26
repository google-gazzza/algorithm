// [Hard] 135. Candy
// 135_candy

// https://leetcode.com/problems/candy
// Runtime: 4484 ms, faster than 5.07% of JavaScript online submissions for Candy.
// Memory Usage: 43.6 MB, less than 26.81% of JavaScript online submissions for Candy.

const getPreviousIndex = (index) => Math.max(-1, index - 2)

/**
 * @param {number[]} ratings
 * @return {number}
 */
const candy = function (ratings) {
  const ratingsLen = ratings.length
  const resultArr = Array.from({ length: ratingsLen }).map((_) => 1)
  for (let i = 0; i < ratingsLen - 1; i += 1 || 0) {
    if (ratings[i] < ratings[i + 1] && resultArr[i] >= resultArr[i + 1]) {
      resultArr[i + 1] = resultArr[i] + 1
    } else if (ratings[i] > ratings[i + 1] && resultArr[i] <= resultArr[i + 1]) {
      resultArr[i] = resultArr[i + 1] + 1
      i = getPreviousIndex(i)
    }
  }

  return resultArr.reduce((acc, cur) => acc + cur, 0)
}

candy([1, 0, 2]) //?
candy([1, 2, 2]) //?
candy([3, 1, 2, 5]) //?
candy([1, 2, 87, 87, 87, 2, 1]) //?
candy([3, 2, 1, 1, 4, 3, 3]) //?
