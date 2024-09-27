// [Medium] 737. Sentence Similarity II
// 737_sentence_similarity_ii

// https://leetcode.com/problems/sentence-similarity-ii
// Runtime: 284 ms, faster than 21.82% of JavaScript online submissions for Sentence Similarity II.
// Memory Usage: 55.8 MB, less than 18.18% of JavaScript online submissions for Sentence Similarity II.

/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
const areSentencesSimilarTwo = function (sentence1, sentence2, similarPairs) {
  if (similarPairs.length === 0) {
    return false
  }
  const strMap = new Map()
  let id = 0
  similarPairs.forEach((similarPair) => {
    const [itemA, itemB] = similarPair
    if (strMap.has(itemA) && strMap.has(itemB) && strMap.get(itemA) !== strMap.get(itemB)) {
      const fromId = strMap.get(itemA)
      const toId = strMap.get(itemB)
      const changeKey = [...strMap].filter((item) => item[1] === fromId).map((item) => item[0])
      changeKey.forEach((key) => strMap.set(key, toId))
    } else if (similarPair.every((item) => !strMap.has(item)) === true) {
      id += 1
      strMap.set(itemA, id)
      strMap.set(itemB, id)
    } else {
      const matchedId = strMap.get(itemA) || strMap.get(itemB)
      strMap.set(itemA, matchedId)
      strMap.set(itemB, matchedId)
    }
  })

  return sentence1.reduce((acc, cur) => acc + `${strMap.get(cur)}-`, '') === sentence2.reduce((acc, cur) => acc + `${strMap.get(cur)}-`, '')
}

// areSentencesSimilarTwo(
//   ['great', 'acting', 'skills'],
//   ['fine', 'drama', 'talent'],
//   [
//     ['great', 'good'],
//     ['fine', 'good'],
//     ['drama', 'acting'],
//     ['skills', 'talent'],
//   ],
// ) //?

// areSentencesSimilarTwo(
//   ['I', 'love', 'leetcode'],
//   ['I', 'love', 'onepiece'],
//   [
//     ['manga', 'onepiece'],
//     ['platform', 'anime'],
//     ['leetcode', 'platform'],
//     ['anime', 'manga'],
//   ],
// ) //?

// areSentencesSimilarTwo(
//   ['I', 'love', 'leetcode'],
//   ['I', 'love', 'onepiece'],
//   [
//     ['manga', 'hunterXhunter'],
//     ['platform', 'anime'],
//     ['leetcode', 'platform'],
//     ['anime', 'manga'],
//   ],
// ) //?

areSentencesSimilarTwo(['great', 'acting', 'skills'], ['fine', 'drama', 'talent'], []) //?
