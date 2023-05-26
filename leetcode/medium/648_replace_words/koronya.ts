// [Medium] 648. Replace Words
// 648_replace_words

// https://leetcode.com/problems/replace-words
// Runtime: 100 ms, faster than 100.00% of TypeScript online submissions for Replace Words.
// Memory Usage: 44.1 MB, less than 92.86% of TypeScript online submissions for Replace Words.

const getAdjustName = (dictionary: string[], word: string) => {
  const dictionaryLen: number = dictionary.length
  for (let i: number = 0; i < dictionaryLen; i += 1) {
    const root: string = dictionary[i]
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
function replaceWords(dictionary: string[], sentence: string): string {
  dictionary.sort((a: string, b: string): number => a.length - b.length)
  return sentence
    .split(' ')
    .map((item) => getAdjustName(dictionary, item))
    .join(' ')
}

replaceWords(['cat', 'bat', 'rat'], 'the cattle was rattled by the battery') //?
