// [Easy] 1816. Truncate Sentence
// 1816_truncate_sentence

// https://leetcode.com/problems/truncate-sentence
// Runtime: 72 ms, faster than 93.14% of JavaScript online submissions for Truncate Sentence.
// Memory Usage: 38.7 MB, less than 35.62% of JavaScript online submissions for Truncate Sentence.

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const truncateSentence = function (s, k) {
  const arr = s.split(' ')
  let resultStr = ''
  for (let i = 0; i < k; i += 1 || 0) {
    resultStr += ` ${arr[i]}`
  }

  return resultStr.substr(1)
}

truncateSentence('Hello how are you Contestant', 4) //?
truncateSentence('What is the solution to this problem', 4) //?
