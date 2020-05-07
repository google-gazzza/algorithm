// https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n
// Runtime: 64 ms, faster than 90.77% of JavaScript online submissions for The k-th Lexicographical String of All Happy Strings of Length n.
// Memory Usage: 41.1 MB, less than 100.00% of JavaScript online submissions for The k-th Lexicographical String of All Happy Strings of Length n.

const strArr = ['a', 'b', 'c']
const getOtherStrArr = str => strArr.filter(item => {
  const lastChar = str[str.length - 1]
  return item !== lastChar
})
const getHappyString = (n, k) => {
  const resultArr = []
  const dfs = (str, lastNum) => {
    if (n === lastNum) {
      resultArr.push(str)
    } else {
      const otherStrArr = getOtherStrArr(str)
      otherStrArr.map(item => dfs(str + item, lastNum + 1))
    }
  }
  strArr.map(str => dfs(str, 1))

  return k > resultArr.length ? '' : resultArr[k - 1]
}
