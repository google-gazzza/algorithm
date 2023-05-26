// [Easy] 374. Guess Number Higher or Lower
// 374_guess_number_higher_or_lower

// https://leetcode.com/problems/guess-number-higher-or-lower
// Runtime: 72 ms, faster than 88.09% of JavaScript online submissions for Guess Number Higher or Lower.
// Memory Usage: 38.3 MB, less than 86.85% of JavaScript online submissions for Guess Number Higher or Lower.

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = function (n) {
  let center = Math.floor(n / 2)
  let left = 1
  let right = n
  const getCenterNumber = () => Math.floor((left + right) / 2)
  let match = guess(center)
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
