// [Medium] 1052. Grumpy Bookstore Owner
// 1052_grumpy_bookstore_owner

// https://leetcode.com/problems/grumpy-bookstore-owner
// Runtime: 608 ms, faster than 8.33% of TypeScript online submissions for Grumpy Bookstore Owner.
// Memory Usage: 43.5 MB, less than 41.67% of TypeScript online submissions for Grumpy Bookstore Owner.

function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
  const total = customers.reduce((acc: number, cur: number, idx: number): number => (grumpy[idx] === 1 ? acc : acc + cur), 0)
  const getAdditional = (index: number): number => {
    const limit = index + minutes
    let acc = 0
    for (let i = index; i < limit; i += 1) {
      if (grumpy[i] === 1) {
        acc += customers[i]
      }
    }
    return acc
  }
  let additionalMax: number = 0
  const limit: number = customers.length - minutes + 1
  for (let i: number = 0; i < limit; i += 1) {
    additionalMax = Math.max(additionalMax, getAdditional(i))
  }

  return total + additionalMax
}

maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3) //?
maxSatisfied([3], [1], 1) //?
