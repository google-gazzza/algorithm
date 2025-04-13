// [JS][6kyu] Sum of integer combinations
// sum-of-integer-combinations
// https://www.codewars.com/kata/59f3178e3640cef6d90000d5/train/javascript

const find = (arr, n) => {
  const arrLen = arr.length
  let count = 0
  arr.reverse()
  const dfs = (partArr, sum, accCount) => {
    if (sum === n) {
      if (accCount <= arrLen) {
        count += 1
      }
      return
    }
    if (sum > n) {
      return
    }
    const [first, ...rest] = partArr
    const remainder = n - sum
    const limit = Math.floor(remainder / first)

    for (let i = limit; i >= 0; i -= 1 || 0) {
      dfs(rest, sum + first * i, accCount + i)
    }
  }
  dfs(arr, 0, 0)

  return count
}

find([1, 2, 3], 10) === 0
find([1, 2, 3], 7) === 2
find([1, 2, 3], 5) === 3
find([3, 6, 9, 12], 12) === 5
find([1, 4, 5, 8], 8) === 3
find([3, 6, 9, 12], 15) === 5
find([3, 6, 9, 12, 14, 18], 30) === 21
