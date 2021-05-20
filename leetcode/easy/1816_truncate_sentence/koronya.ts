// [Easy] 1816. Truncate Sentence
// 1816_truncate_sentence

// https://leetcode.com/problems/truncate-sentence
// Runtime: 80 ms, faster than 81.25% of TypeScript online submissions for Truncate Sentence.
// Memory Usage: 40.2 MB, less than 18.75% of TypeScript online submissions for Truncate Sentence.
function truncateSentence(s: string, k: number): string {
  const arr: string[] = s.split(' ')
  let resultStr: string = ''
  for (let i: number = 0; i < k; i += 1) {
    resultStr += ` ${arr[i]}`
  }

  return resultStr.substr(1)
}

truncateSentence('Hello how are you Contestant', 4) //?
truncateSentence('What is the solution to this problem', 4) //?
