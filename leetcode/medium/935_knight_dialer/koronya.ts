// [Medium] 935. Knight Dialer
// 935_knight_dialer

// https://leetcode.com/problems/knight-dialer
// Runtime: 148 ms, faster than 100.00% of TypeScript online submissions for Knight Dialer.
// Memory Usage: 45.7 MB, less than 100.00% of TypeScript online submissions for Knight Dialer.

const getMatchedNumbers = (num: number): number[] => {
  switch (num) {
    default:
    case 0:
      return [4, 6]
    case 1:
      return [6, 8]
    case 2:
      return [7, 9]
    case 3:
      return [4, 8]
    case 4:
      return [0, 3, 9]
    case 5:
      return []
    case 6:
      return [0, 1, 7]
    case 7:
      return [2, 6]
    case 8:
      return [1, 3]
    case 9:
      return [2, 4]
  }
}

const MOD: number = Math.pow(10, 9) + 7

function knightDialer(n: number): number {
  let prevDP: number[] = Array(10).fill(1)
  let count: number = 0
  for (let i: number = 2; i <= n; i += 1) {
    const newDP: number[] = Array(10).fill(0)
    for (let j: number = 0; j <= 9; j += 1) {
      getMatchedNumbers(j).forEach((matchedNumber) => {
        newDP[j] = (newDP[j] + prevDP[matchedNumber]) % MOD
      })
    }
    prevDP = newDP
  }
  prevDP.forEach((item) => {
    count = (count + item) % MOD
  })

  return count
}

knightDialer(1) //?
knightDialer(2) //?
knightDialer(3) //?
knightDialer(10) //?
knightDialer(100) //?
knightDialer(3131) //?
