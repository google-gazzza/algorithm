// [Easy] 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence
// 1455_check_if_a_word_occurs_as_a_prefix_of_any_word_in_a_sentence

// https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence
// Runtime: 72 ms, faster than 83.33% of JavaScript online submissions for Check If a Word Occurs As a Prefix of Any Word in a Sentence.
// Memory Usage: 38.5 MB, less than 10.00% of JavaScript online submissions for Check If a Word Occurs As a Prefix of Any Word in a Sentence.
const isPrefixOfWord = (sentence, searchWord) => {
  const sentences = sentence.split(' ')
  const sentenceLen = sentences.length
  for (let i = 0; i < sentenceLen; i = i + 1 | 0) {
    if (sentences[i].startsWith(searchWord)) {
      return i + 1
    }
  }
  return -1
}
