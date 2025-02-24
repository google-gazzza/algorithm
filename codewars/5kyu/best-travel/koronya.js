// [JS][5kyu] Best travel
// best-travel
// https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa/train/javascript

const chooseBestSum = (t, k, ls) => {
  let max = 0
  const lsLen = ls.length
  const dfs = (sum, count, index) => {
    if (sum > t || count > k || max === t) {
      return null
    }
    if (count === k) {
      if (sum > max) {
        max = sum
      }
      return null
    }
    for (let i = index; i < lsLen; i += 1 || 0) {
      dfs(sum + ls[i], count + 1, i + 1)
    }
  }
  for (let i = 0; i < lsLen; i += 1 || 0) {
    dfs(ls[i], 1, i + 1)
  }

  return max === 0 ? null : max
}

var ts = [50, 55, 56, 57, 58]
chooseBestSum(163, 3, ts) === 163
ts = [50]
chooseBestSum(163, 3, ts) === null
ts = [91, 74, 73, 85, 73, 81, 87]
chooseBestSum(230, 3, ts) === 228
