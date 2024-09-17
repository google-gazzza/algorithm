// [Medium] 2024. Maximize the Confusion of an Exam
// 2024_maximize_the_confusion_of_an_exam

// https://leetcode.com/problems/maximize-the-confusion-of-an-exam
// Runtime: 116 ms, faster than 60.00% of TypeScript online submissions for Maximize the Confusion of an Exam.
// Memory Usage: 42.7 MB, less than 80.00% of TypeScript online submissions for Maximize the Confusion of an Exam.


function maxConsecutiveAnswers(answerKey: string, k: number): number {
  let left: number = 0
  let maxFrequency: number = 0
  let maxLen: number = 0
  const strMap = new Map<string, number>()
  const answerKeyLen: number = answerKey.length
  for (let right: number = 0; right < answerKeyLen; right += 1) {
    const str = answerKey[right]
    const value = (strMap.get(str) || 0) + 1
    strMap.set(str, value)
    maxFrequency = Math.max(maxFrequency, value)
    if (right - left + 1 - maxFrequency > k) {
      strMap.set(answerKey[left], strMap.get(answerKey[left])! - 1)
      left += 1
    }
    maxLen = Math.max(maxLen, right - left + 1)
  }

  return maxLen
}
