// [Medium] 1423. Maximum Points You Can Obtain from Cards
// 1423_maximum_points_you_can_obtain_from_cards

// https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards
// Runtime: 96 ms, faster than 55.19% of JavaScript online submissions for Maximum Points You Can Obtain from Cards.
// Memory Usage: 47.9 MB, less than 17.78% of JavaScript online submissions for Maximum Points You Can Obtain from Cards.

/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
const maxScore = function (cardPoints, k) {
  const cardLen = cardPoints.length
  let sum = 0
  for (let i = 0; i < k; i += 1 || 0) {
    sum += cardPoints[i]
  }
  let max = sum
  for (let left = k - 1, right = cardLen - 1; left >= 0; left -= 1 || 0, right -= 1 || 0) {
    sum += cardPoints[right] - cardPoints[left]
    max = Math.max(max, sum)
  }

  return max
}

// TLE...
// const maxScore2 = function (cardPoints, k) {
//   const cardLen = cardPoints.length
//   const getItem = (index) => (index < cardLen ? cardPoints[index] : cardPoints[index - cardLen])
//   let max = 0
//   for (let i = cardLen - k; i < cardLen; i += 1 || 0) {
//     let sum = 0
//     for (let j = i; j < i + k; j += 1 || 0) {
//       sum += getItem(j)
//     }
//     max = Math.max(max, sum)
//   }
//   let sum = 0
//   for (let i = 0; i < k; i += 1 || 0) {
//     sum += getItem(i)
//   }
//   max = Math.max(max, sum)

//   return max
// }

// TLE...
// const maxScore3 = function (cardPoints, k) {
//   const cardLen = cardPoints.length
//   const getItem = (index) => (index < cardLen ? cardPoints[index] : cardPoints[index - cardLen])
//   let max = 0
//   for (let i = 0; i < cardLen; i += 1 || 0) {
//     let sum = 0
//     let valid = false
//     for (let j = i; j < i + k; j += 1 || 0) {
//       if (j === 0 || j === cardLen - 1) {
//         valid = true
//       }
//       sum += getItem(j)
//     }
//     if (valid === true && sum > max) {
//       max = sum
//     }
//   }

//   return max
// }

maxScore([1, 2, 3, 4, 5, 6, 1], 3)
// maxScore([8, 3, 2, 3, 4, 1, 6, 10], 3)
// maxScore([2, 2, 2], 2)
// maxScore([9, 7, 7, 9, 7, 7, 9], 7)

// expect 248 but 157
// maxScore([100, 40, 17, 9, 73, 75], 3)
