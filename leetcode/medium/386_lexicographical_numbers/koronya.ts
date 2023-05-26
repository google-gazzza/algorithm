// [Medium] 386. Lexicographical Numbers
// 386_lexicographical_numbers

// https://leetcode.com/problems/lexicographical-numbers
// Runtime: 331 ms, faster than 8.33% of TypeScript online submissions for Lexicographical Numbers.
// Memory Usage: 75.1 MB, less than 8.33% of TypeScript online submissions for Lexicographical Numbers.

function lexicalOrder(n: number): number[] {
  const trie = new Trie()
  for (let i: number = 1; i <= n; i += 1) {
    trie.insert(String(i))
  }
  return trie.getArray()
}

type TrieInfoObjType = { [k: string]: TrieInfoObjType }

class Trie {
  obj: TrieInfoObjType = {}

  insert = (word: string): void => {
    let obj = this.obj
    word.split('').map((key) => {
      if (obj[key] == null) {
        obj[key] = {}
      }
      obj = obj[key]
    })
  }

  getArray = () => {
    const resultArr: string[] = []
    const dfs = (infoObj: TrieInfoObjType, accStr = '') => {
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
