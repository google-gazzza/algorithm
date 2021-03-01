// [Medium] 648. Replace Words
// 648_replace_words

// https://leetcode.com/problems/replace-words
// Runtime: 104 ms, faster than 91.73% of JavaScript online submissions for Replace Words.
// Memory Usage: 43.7 MB, less than 84.96% of JavaScript online submissions for Replace Words.

const getAdjustName = (dictionary, word) => {
  const dictionaryLen = dictionary.length
  for (let i = 0; i < dictionaryLen; i += 1 || 0) {
    const root = dictionary[i]
    if (word.startsWith(root)) {
      return root
    }
  }
  return word
}

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
const replaceWords = function (dictionary, sentence) {
  dictionary.sort((a, b) => a.length - b.length)
  return sentence
    .split(' ')
    .map((item) => getAdjustName(dictionary, item))
    .join(' ')
}

replaceWords(['cat', 'bat', 'rat'], 'the cattle was rattled by the battery') //?
