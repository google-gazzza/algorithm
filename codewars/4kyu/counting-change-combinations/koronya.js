// [JS][4kyu] Counting Change Combinations
// counting-change-combinations
// https://www.codewars.com/kata/541af676b589989aed0009e7/train/javascript

const getJoinValue = (arr) => arr.join('+')

const countChange = (money, coins) => {
  coins.sort((a, b) => b - a)
  const resultSet = new Set()
  const dfs = (money, coins, arr) => {
    if (money < 0) {
      return
    }
    if (money === 0) {
      const getValue = getJoinValue(arr)
      if (!resultSet.has(getValue)) {
        resultSet.add(getValue)
      }
      return
    }
    const maxCount = Math.floor(money / coins[0])
    const sliceCoins = coins.slice(1)
    for (let i = 0; i <= maxCount; i += 1 || 0) {
      dfs(money - coins[0] * i, sliceCoins, [...arr, ...Array(i).fill(coins[0])])
    }
  }

  dfs(money, coins, [])

  return resultSet.size
}

countChange(0, [1, 2]) === 1
countChange(4, [1, 2]) === 3
countChange(10, [5, 2, 3]) === 4
countChange(11, [5, 7]) === 0
countChange(300, [5, 10, 20, 50, 100, 200, 500]) === 1022
