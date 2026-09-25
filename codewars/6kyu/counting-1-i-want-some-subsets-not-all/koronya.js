// [JS][6kyu]  Counting 1: I Want Some Subsets, Not All!
// counting-1-i-want-some-subsets-not-all
// https://www.codewars.com/kata/591392af88a4994caa0000e0/train/javascript

const valueMap = new Map([
  [1, 1],
  [2, 2],
  [3, 4],
])

const f = (n) => {
  if (valueMap.has(n)) {
    return valueMap.get(n)
  }

  const value = f(n - 1) + f(n - 2) + 1
  valueMap.set(n, value)
  return value
}

const f2 = (n) => {
  let count = 0

  const dfs = (next) => {
    count += 1
    for (let i = next; i < n; i += 1) {
      if (i !== next) {
        dfs(i + 1)
      }
    }
  }

  for (let i = 1; i <= n; i += 1) {
    dfs(i)
  }

  return count
}

// f(5) === 12
// f(4) === 7
// f(3) === 4
// f(2) === 2
// f(20) === 17710
