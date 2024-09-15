// [Easy] 734. Sentence Similarity
// 734_sentence_similarity

// https://leetcode.com/problems/sentence-similarity
// Runtime: 76 ms, faster than 76.92% of JavaScript online submissions for Sentence Similarity.
// Memory Usage: 40.6 MB, less than 64.10% of JavaScript online submissions for Sentence Similarity.

/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
const areSentencesSimilar = function (sentence1, sentence2, similarPairs) {
  const sentence1Len = sentence1.length
  if (sentence1Len !== sentence2.length) {
    return false
  }

  const strMap = new Map()
  similarPairs.forEach((similarPair) => {
    const [itemA, itemB] = similarPair
    if (strMap.has(itemA) === true) {
      strMap.get(itemA).push(itemB)
    } else {
      strMap.set(itemA, [itemB])
    }
  })

  for (let i = 0; i < sentence1Len; i += 1 || 0) {
    const s1 = sentence1[i]
    const s2 = sentence2[i]
    if (!(s1 === s2 || (strMap.has(s1) === true && strMap.get(s1).includes(s2)) || (strMap.has(s2) === true && strMap.get(s2).includes(s1)))) {
      return false
    }
  }

  return true
}

areSentencesSimilar(
  ['great', 'acting', 'skills'],
  ['fine', 'drama', 'talent'],
  [
    ['great', 'fine'],
    ['drama', 'acting'],
    ['skills', 'talent'],
  ],
) //?

// areSentencesSimilar(['great'], ['great'], []) //?

// areSentencesSimilar(['great'], ['doubleplus', 'good'], [['great', 'doubleplus']]) //?

areSentencesSimilar(
  ['an', 'extraordinary', 'meal'],
  ['a', 'good', 'dinner'],
  [
    ['great', 'good'],
    ['extraordinary', 'good'],
    ['well', 'good'],
    ['wonderful', 'good'],
    ['excellent', 'good'],
    ['fine', 'good'],
    ['nice', 'good'],
    ['any', 'one'],
    ['some', 'one'],
    ['unique', 'one'],
    ['the', 'one'],
    ['an', 'one'],
    ['single', 'one'],
    ['a', 'one'],
    ['truck', 'car'],
    ['wagon', 'car'],
    ['automobile', 'car'],
    ['auto', 'car'],
    ['vehicle', 'car'],
    ['entertain', 'have'],
    ['drink', 'have'],
    ['eat', 'have'],
    ['take', 'have'],
    ['fruits', 'meal'],
    ['brunch', 'meal'],
    ['breakfast', 'meal'],
    ['food', 'meal'],
    ['dinner', 'meal'],
    ['super', 'meal'],
    ['lunch', 'meal'],
    ['possess', 'own'],
    ['keep', 'own'],
    ['have', 'own'],
    ['extremely', 'very'],
    ['actually', 'very'],
    ['really', 'very'],
    ['super', 'very'],
  ],
) //?
