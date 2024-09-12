// [Easy] 1652. Defuse the Bomb
// 1652_defuse_the_bomb

// https://leetcode.com/problems/defuse-the-bomb
// Runtime: 80 ms, faster than 100.00% of JavaScript online submissions for Defuse the Bomb.
// Memory Usage: 38.8 MB, less than 100.00% of JavaScript online submissions for Defuse the Bomb.
const getArrItem = (arr, index) => {
  const arrLen = arr.length
  if (index < 0) {
    return arr[index + arrLen]
  } else if (index >= arrLen) {
    return arr[index - arrLen]
  } else {
    return arr[index]
  }
}

const getSum = (arr, index, k) => {
  let sum = 0
  if (k > 0) {
    for (let i = 1; i <= k; i += 1 || 0) {
      sum += getArrItem(arr, index + i)
    }
  } else {
    for (let i = -1; i >= k; i -= 1 || 0) {
      sum += getArrItem(arr, index + i)
    }
  }
  return sum
}

const decrypt = function (code, k) {
  if (k === 0) {
    return code.map(_ => 0)
  }
  return code.map((_, index) => {
    return getSum(code, index, k)
  })
}
