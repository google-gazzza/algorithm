// [Medium] 1423. Maximum Points You Can Obtain from Cards
// 1423_maximum_points_you_can_obtain_from_cards

// https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards
// Runtime: 97 ms, faster than 63.64% of TypeScript online submissions for Maximum Points You Can Obtain from Cards.
// Memory Usage: 49.4 MB, less than 18.18% of TypeScript online submissions for Maximum Points You Can Obtain from Cards.

function maxScore(cardPoints: number[], k: number): number {
  const cardLen = cardPoints.length
  let sum: number = 0
  for (let i: number = 0; i < k; i += 1) {
    sum += cardPoints[i]
  }
  let max: number = sum
  for (let left: number = k - 1, right: number = cardLen - 1; left >= 0; left -= 1, right -= 1) {
    sum += cardPoints[right] - cardPoints[left]
    max = Math.max(max, sum)
  }

  return max
}
