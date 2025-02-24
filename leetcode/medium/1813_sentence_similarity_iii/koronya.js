// [Medium] 1813. Sentence Similarity III
// 1813_sentence_similarity_iii

// https://leetcode.com/problems/sentence-similarity-iii
// Runtime: 64 ms, faster than 94.74% of JavaScript online submissions for Sentence Similarity III.
// Memory Usage: 42.3 MB, less than 52.63% of JavaScript online submissions for Sentence Similarity III.

/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
const areSentencesSimilar = function (sentence1, sentence2) {
  let long = sentence1
  let short = sentence2
  if (sentence1.length < sentence2.length) {
    long = sentence2
    short = sentence1
  }
  const longArr = long.split(' ')
  const longArrLen = longArr.length
  const shortArr = short.split(' ')
  const shortArrLen = shortArr.length

  let i = 0
  while (i < shortArrLen && shortArr[i] === longArr[i]) {
    i += 1
  }
  while (i < shortArrLen && shortArr[i] === longArr[longArrLen - shortArrLen + i]) {
    i += 1
  }

  return i === shortArrLen
}


areSentencesSimilar('My name is Haley', 'My Haley') === true
areSentencesSimilar('of', 'A lot of words') === false
areSentencesSimilar('Eating right now', 'Eating') === true
areSentencesSimilar('Ogn WtWj HneS', 'Ogn WtWj HneS') === true
areSentencesSimilar('Luky', 'Lucccky') === false
areSentencesSimilar('c h p Ny', 'c BDQ r h p Ny') === true
areSentencesSimilar('d T d ED uXW L U J n klIe', 'd T d ED uXW L U J klIe') === true
areSentencesSimilar('d T d ED uXW L U J n klIe', 'd T e ED uXW L U J klIe') === false
areSentencesSimilar('A', 'a A b A') === true
