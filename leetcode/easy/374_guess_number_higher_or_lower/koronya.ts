// [Easy] 374. Guess Number Higher or Lower
// 374_guess_number_higher_or_lower

// https://leetcode.com/problems/guess-number-higher-or-lower
// Runtime: 80 ms, faster than 70.97% of TypeScript online submissions for Guess Number Higher or Lower.
// Memory Usage: 38.8 MB, less than 77.42% of TypeScript online submissions for Guess Number Higher or Lower.

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

type GuessType = -1 | 0 | 1

function guessNumber(n: number): number {
  let center: number = Math.floor(n / 2)
  let left: number = 1
  let right: number = n
  const getCenterNumber = (): number => Math.floor((left + right) / 2)
  let match: GuessType = guess(center)
  while (match !== 0) {
    if (match === 1) {
      left = center + 1
    } else {
      right = center - 1
    }
    center = getCenterNumber()
    match = guess(center)
  }

  return center
}
