// [Medium] 208. Implement Trie (Prefix Tree)
// 208_implement_trie_(prefix_tree)

// https://leetcode.com/problems/implement-trie-prefix-tree
// Runtime: 188 ms, faster than 68.17% of JavaScript online submissions for Implement Trie (Prefix Tree).
// Memory Usage: 52.3 MB, less than 90.74% of JavaScript online submissions for Implement Trie (Prefix Tree).

const Trie = function () {
  this.obj = {}
}

Trie.prototype.insert = function (word) {
  let obj = this.obj
  word.split('').map(key => {
    if (obj[key] == null) {
      obj[key] = {}
    }
    obj = obj[key]
  })
  obj['isEnd'] = true
}

Trie.prototype.startsWithInfo = function (word) {
  let obj = this.obj
  const result = word.split('').every(key => {
    if (obj[key] == null) {
      return false
    }
    obj = obj[key]
    return true
  })
  return {result, obj}
}

Trie.prototype.search = function (word) {
  const {result, obj} = this.startsWithInfo(word)
  return result && obj.isEnd === true
}

Trie.prototype.startsWith = function (prefix) {
  return this.startsWithInfo(prefix).result
}
