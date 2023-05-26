// [Easy] 734. Sentence Similarity
// 734_sentence_similarity

// https://leetcode.com/problems/sentence-similarity
// Runtime: 68 ms, faster than 100.00% of TypeScript online submissions for Sentence Similarity.
// Memory Usage: 41.1 MB, less than 33.33% of TypeScript online submissions for Sentence Similarity.


function areSentencesSimilar(sentence1: string[], sentence2: string[], similarPairs: string[][]): boolean {
  const sentence1Len: number = sentence1.length
  if (sentence1Len !== sentence2.length) {
    return false
  }

  const strMap = new Map<string, string[]>()
  similarPairs.forEach((similarPair) => {
    const [itemA, itemB] = similarPair
    if (strMap.has(itemA) === true) {
      strMap.get(itemA)!.push(itemB)
    } else {
      strMap.set(itemA, [itemB])
    }
  })

  for (let i: number = 0; i < sentence1Len; i += 1) {
    const s1 = sentence1[i]
    const s2 = sentence2[i]
    if (!(s1 === s2 || (strMap.has(s1) === true && strMap.get(s1)!.includes(s2)) || (strMap.has(s2) === true && strMap.get(s2)!.includes(s1)))) {
      return false
    }
  }

  return true
}

