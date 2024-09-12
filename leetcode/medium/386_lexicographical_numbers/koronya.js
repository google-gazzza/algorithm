// [Medium] 386. Lexicographical Numbers
// 386_lexicographical_numbers

// https://leetcode.com/problems/lexicographical-numbers
// Runtime: 204 ms, faster than 5.49% of JavaScript online submissions for Lexicographical Numbers.
// Memory Usage: 68 MB, less than 5.49% of JavaScript online submissions for Lexicographical Numbers.

/**
 * @param {number} n
 * @return {number[]}
 */
const lexicalOrder = function (n) {
  const trie = new Trie()
  for (let i = 1; i <= n; i += 1 || 0) {
    trie.insert(String(i))
  }
  return trie.getArray()
}

class Trie {
  obj = {}

  insert = (word) => {
    let obj = this.obj
    word.split('').map((key) => {
      if (obj[key] == null) {
        obj[key] = {}
      }
      obj = obj[key]
    })
  }

  getArray = () => {
    const resultArr = []
    const dfs = (infoObj, accStr = '') => {
      if (accStr !== '') {
        resultArr.push(accStr)
      }
      Object.keys(infoObj).forEach((key) => {
        dfs(infoObj[key], accStr + String(key))
      })
    }
    dfs(this.obj)

    return resultArr.map((item) => Number(item))
  }
}

lexicalOrder(13)
