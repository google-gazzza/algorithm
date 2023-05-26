// [Easy] 453. Minimum Moves to Equal Array Elements
// 453_minimum_moves_to_equal_array_elements

// https://leetcode.com/problems/minimum-moves-to-equal-array-elements
// Runtime: 88 ms, faster than 70.77% of JavaScript online submissions for Minimum Moves to Equal Array Elements.
// Memory Usage: 42 MB, less than 46.67% of JavaScript online submissions for Minimum Moves to Equal Array Elements.
const minMoves = function (nums) {
  const min = Math.min(...nums)

  return nums.reduce((acc, num) => acc + num - min, 0)
}

// 처음에 단순 무식하게 이렇게 풀었다가 Time Limit Exceeded...
const minMoves2 = function (nums) {
  const lastIndex = nums.length - 1
  let moves = 0
  let someNum = nums[0]
  while (!nums.every((num) => num === someNum)) {
    nums.sort((a, b) => a - b)
    nums = nums.map((num, index) => index !== lastIndex ? num + 1 : num)
    moves += 1
    someNum = nums[0]
  }

  return moves
}
