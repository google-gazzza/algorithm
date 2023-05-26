// [Easy] 1652. Defuse the Bomb
// 1652_defuse_the_bomb

// https://leetcode.com/problems/defuse-the-bomb
// Runtime: 84 ms, faster than 100.00% of TypeScript online submissions for Defuse the Bomb.
// Memory Usage: 40.5 MB, less than 100.00% of TypeScript online submissions for Defuse the Bomb.
const getArrItem = (arr: number[], index: number): number => {
  const arrLen: number = arr.length
  if (index < 0) {
    return arr[index + arrLen]
  } else if (index >= arrLen) {
    return arr[index - arrLen]
  } else {
    return arr[index]
  }
}

const getSum = (arr: number[], index: number, k: number): number => {
  let sum = 0
  if (k > 0) {
    for (let i: number = 1; i <= k; i += 1) {
      sum += getArrItem(arr, index + i)
    }
  } else {
    for (let i: number = -1; i >= k; i -= 1) {
      sum += getArrItem(arr, index + i)
    }
  }
  return sum
}

function decrypt(code: number[], k: number): number[] {
  if (k === 0) {
    return code.map(_ => 0)
  }
  return code.map((_, index) => {
    return getSum(code, index, k)
  })
}
