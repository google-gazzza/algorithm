// [Easy] 2062. Count Vowel Substrings of a String
// 2062_count_vowel_substrings_of_a_string

// https://leetcode.com/problems/count-vowel-substrings-of-a-string
// Runtime: 84 ms, faster than 100.00% of JavaScript online submissions for Count Vowel Substrings of a String.
// Memory Usage: 40.7 MB, less than 100.00% of JavaScript online submissions for Count Vowel Substrings of a String.

const vowelArr = ['a', 'e', 'i', 'o', 'u']

/**
 * @param {string} word
 * @return {number}
 */
const countVowelSubstrings = function (word) {
  const wordLen = word.length
  let count = 0
  const dfs = (str, vowelSet, start) => {
    if (vowelArr.includes(str) === false) {
      return
    }
    vowelSet.add(str)
    if (vowelSet.size === 5) {
      count += 1
    }
    dfs(word[start], vowelSet, start + 1)
  }
  for (let i = 0; i < wordLen; i += 1 || 0) {
    dfs(word[i], new Set(), i + 1)
  }

  return count
}

countVowelSubstrings('aeiouu') //?
countVowelSubstrings('unicornarihan') //?
countVowelSubstrings('cuaieuouac') //?
countVowelSubstrings('bbaeixoubb') //?
