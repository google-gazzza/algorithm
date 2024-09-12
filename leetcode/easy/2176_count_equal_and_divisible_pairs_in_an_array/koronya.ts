// [Easy] 2176. Count Equal and Divisible Pairs in an Array
// 2176_count_equal_and_divisible_pairs_in_an_array

// https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array
// Runtime: 70 ms, faster than 91.94% of TypeScript online submissions for Count Equal and Divisible Pairs in an Array.
// Memory Usage: 45.1 MB, less than 20.97% of TypeScript online submissions for Count Equal and Divisible Pairs in an Array.

function countPairs(nums: number[], k: number): number {
  const numMap = new Map<number, number[]>()
  nums.forEach((num, index) => {
    if (numMap.has(num) === true) {
      numMap.get(num)!.push(index)
    } else {
      numMap.set(num, [index])
    }
  })

  return [...numMap].reduce((acc, cur) => {
    const [_, arr] = cur
    const arrLen = arr.length
    let count = 0
    for (let i: number = 0; i < arrLen; i += 1) {
      const a = arr[i]
      for (let j: number = i + 1; j < arrLen; j += 1) {
        if ((a * arr[j]) % k === 0) {
          count += 1
        }
      }
    }
    return acc + count
  }, 0)
}
