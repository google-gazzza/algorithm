// https://leetcode.com/problems/letter-tile-possibilities
// Runtime: 124 ms, faster than 37.50% of JavaScript online submissions for Letter Tile Possibilities.
// Memory Usage: 43.4 MB, less than 100.00% of JavaScript online submissions for Letter Tile Possibilities.
const numTilePossibilities = tiles => {
  const onlySet = new Set()
  let count = 0
  const dfs = (str, arr) => {
    if (!onlySet.has(str) && str !== '') {
      onlySet.add(str)
      count += 1
    }
    const arrLen = arr.length
    for (let i = 0; i < arrLen; i = i + 1 | 0) {
      const dddArr = [...arr]
      const ddd = dddArr.splice(i, 1)
      dfs(str + ddd, dddArr)
    }
  }
  dfs('', tiles)

  return count
}
