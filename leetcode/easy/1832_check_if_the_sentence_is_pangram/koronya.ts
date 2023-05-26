// [Easy] 1832. Check if the Sentence Is Pangram
// 1832_check_if_the_sentence_is_pangram

// https://leetcode.com/problems/check-if-the-sentence-is-pangram
// Runtime: 88 ms, faster than 64.10% of TypeScript online submissions for Check if the Sentence Is Pangram.
// Memory Usage: 40.5 MB, less than 20.51% of TypeScript online submissions for Check if the Sentence Is Pangram.

const KEYCODE_OF_LOWER_A: number = 'a'.charCodeAt(0)
const KEYCODE_OF_LOWER_Z: number = 'z'.charCodeAt(0)

function checkIfPangram(sentence: string): boolean {
  const sentenceLen: number = sentence.length
  const engSet = new Set<number>()
  for (let i: number = KEYCODE_OF_LOWER_A; i <= KEYCODE_OF_LOWER_Z; i += 1) {
    engSet.add(i)
  }
  for (let i: number = 0; i < sentenceLen; i += 1) {
    const strKeycode: number = sentence[i].charCodeAt(0)
    if (engSet.has(strKeycode)) {
      engSet.delete(strKeycode)
    }
  }

  return engSet.size === 0
}

checkIfPangram('abc') //?
checkIfPangram('thequickbrownfoxjumpsoverthelazydog') //?
checkIfPangram('leetcode') //?
