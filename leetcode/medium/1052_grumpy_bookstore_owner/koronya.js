// [Medium] 1052. Grumpy Bookstore Owner
// 1052_grumpy_bookstore_owner

// https://leetcode.com/problems/grumpy-bookstore-owner
// Runtime: 604 ms, faster than 15.83% of JavaScript online submissions for Grumpy Bookstore Owner.
// Memory Usage: 42.3 MB, less than 55.83% of JavaScript online submissions for Grumpy Bookstore Owner.

/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
const maxSatisfied = function (customers, grumpy, minutes) {
  const total = customers.reduce((acc, cur, idx) => (grumpy[idx] === 1 ? acc : acc + cur), 0)
  const getAdditional = (index) => {
    const limit = index + minutes
    let acc = 0
    for (let i = index; i < limit; i += 1 || 0) {
      if (grumpy[i] === 1) {
        acc += customers[i]
      }
    }
    return acc
  }
  let additionalMax = 0
  const limit = customers.length - minutes + 1
  for (let i = 0; i < limit; i += 1 || 0) {
    additionalMax = Math.max(additionalMax, getAdditional(i))
  }

  return total + additionalMax
}

maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3) //?
maxSatisfied([3], [1], 1) //?
