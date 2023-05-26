// [Medium] 187. Repeated DNA Sequences
// 187_repeated_dna_sequences

// https://leetcode.com/problems/repeated-dna-sequences
// Runtime: 140 ms, faster than 50.69% of JavaScript online submissions for Repeated DNA Sequences.
// Memory Usage: 56 MB, less than 43.84% of JavaScript online submissions for Repeated DNA Sequences.
const findRepeatedDnaSequences = s => {
  const sLen = s.length
  const sequenceMap = new Map()
  let tempString = s.substr(0, 10)
  sequenceMap.set(tempString, 1)
  for (let i = 10; i < sLen; i = i + 1 | 0) {
    tempString = tempString.substr(1, 9) + s[i]
    sequenceMap.set(tempString, (sequenceMap.get(tempString) || 0) + 1)
  }

  return [...sequenceMap]
    .filter(item => item[1] > 1)
    .map(item => item[0])
}
