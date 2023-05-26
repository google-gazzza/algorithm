// [Medium] 279. Perfect Squares
// 279_perfect_squares

// https://leetcode.com/problems/perfect-squares
// Runtime: 384 ms, faster than 23.94% of JavaScript online submissions for Perfect Squares.
// Memory Usage: 42.4 MB, less than 24.08% of JavaScript online submissions for Perfect Squares.
const numSquares = n => {
  const perfectSquareNumbers = []
  const limit = Math.floor(Math.sqrt(n))
  for (let i = 1; i <= limit; i = i + 1 | 0) {
    perfectSquareNumbers.push(i * i)
  }
  let minCount = Number.MAX_SAFE_INTEGER
  const bfs = (lastIndex = perfectSquareNumbers.length - 1, sum = 0, arr = []) => {
    const count = arr.length
    if (sum > n || count >= minCount) {
      return
    }
    if (sum === n) {
      minCount = Math.min(minCount, count)
    } else {
      for (let i = lastIndex; i >= 0; i = i - 1 | 0) {
        const item = perfectSquareNumbers[i]
        bfs(i, sum + item, [...arr, item])
      }
    }
  }
  bfs()

  return minCount
}

// Time Limit Exceeded
// 이렇게 풀면 느림 ㅜㅜ
const numSquares2 = n => {
  const perfectSquareNumbers = []
  const limit = Math.floor(Math.sqrt(n))
  for (let i = 1; i <= limit; i = i + 1 | 0) {
    perfectSquareNumbers.push(i * i)
  }
  let minCount = Number.MAX_SAFE_INTEGER
  const dfs = (lastIndex = perfectSquareNumbers.length - 1, sum = 0, arr = []) => {
    if (sum > n) {
      return
    }
    const count = arr.length
    if (sum === n) {
      minCount = Math.min(minCount, count)
    } else {
      for (let i = lastIndex; i >= 0; i = i - 1 | 0) {
        const item = perfectSquareNumbers[i]
        dfs(i, sum + item, [...arr, item])
      }
    }
  }
  dfs()

  return minCount
}
