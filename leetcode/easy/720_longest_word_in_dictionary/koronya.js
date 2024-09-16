// [Easy] 720. Longest Word in Dictionary
// 720_longest_word_in_dictionary

// https://leetcode.com/problems/longest-word-in-dictionary
// Runtime: 128 ms, faster than 52.75% of JavaScript online submissions for Longest Word in Dictionary.
// Memory Usage: 45.7 MB, less than 19.32% of JavaScript online submissions for Longest Word in Dictionary.
const longestWord = function(words) {
  let longestWords = []
  let maxLen = 0
  const trie = new Trie()
  words.map(word => {
    trie.insert(word)
  })

  words.map(word => {
    const validWordLen = trie.getValidWordLen(word, maxLen)
    if (maxLen < validWordLen) {
      maxLen = validWordLen
      longestWords = [word]
    } else if (maxLen === validWordLen) {
      longestWords.push(word)
    }
  })
  longestWords.sort()

  return longestWords[0]
}

class Trie {
  obj = {}

  insert = word => {
    let obj = this.obj
    word.split('').map(key => {
      if (obj[key] == null) {
        obj[key] = {}
      }
      obj = obj[key]
    })
    obj['isEnd'] = true
  }

  getValidWordLen = (word, maxLen) => {
    let wordLen = word.length
    if (wordLen < maxLen) {
      return 0
    }

    let obj = this.obj
    const isValidWord = word.split('').every(key => {
      obj = obj[key]
      return obj['isEnd'] === true
    })

    if (isValidWord === false) {
      wordLen = 0
    }

    return wordLen
  }
}
