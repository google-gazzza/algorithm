// [Medium] 2024. Maximize the Confusion of an Exam
// 2024_maximize_the_confusion_of_an_exam

// https://leetcode.com/problems/maximize-the-confusion-of-an-exam
// Runtime: 88 ms, faster than 95.83% of JavaScript online submissions for Maximize the Confusion of an Exam.
// Memory Usage: 42.8 MB, less than 6.25% of JavaScript online submissions for Maximize the Confusion of an Exam.

/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
const maxConsecutiveAnswers = function (answerKey, k) {
  let left = 0
  let maxFrequency = 0
  let maxLen = 0
  const strMap = new Map()
  const answerKeyLen = answerKey.length
  for (let right = 0; right < answerKeyLen; right += 1 || 0) {
    const str = answerKey[right]
    const value = (strMap.get(str) || 0) + 1
    strMap.set(str, value)
    maxFrequency = Math.max(maxFrequency, value)
    if (right - left + 1 - maxFrequency > k) {
      strMap.set(answerKey[left], strMap.get(answerKey[left]) - 1)
      left += 1
    }
    maxLen = Math.max(maxLen, right - left + 1)
  }

  return maxLen
}

maxConsecutiveAnswers('TTFF', 2) //?
maxConsecutiveAnswers('TFFT', 1) //?
maxConsecutiveAnswers('TTFTTFTT', 1) //?

// to be 7
maxConsecutiveAnswers('TFTFTTTF', 2) //?
