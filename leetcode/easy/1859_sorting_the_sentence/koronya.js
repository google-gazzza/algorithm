// [Easy] 1859. Sorting the Sentence
// 1859_sorting_the_sentence

// https://leetcode.com/problems/sorting-the-sentence
// Runtime: 76 ms, faster than 84.62% of JavaScript online submissions for Sorting the Sentence.
// Memory Usage: 38.2 MB, less than 77.35% of JavaScript online submissions for Sorting the Sentence.

/**
 * @param {string} s
 * @return {string}
 */
const sortSentence = function (s) {
  return s
    .split(' ')
    .map((item) => [item.slice(0, item.length - 1), item.slice(item.length - 1)])
    .sort((a, b) => a[1] - b[1])
    .reduce((acc, cur) => acc + ' ' + cur[0], '')
    .slice(1)
}

sortSentence('is2 sentence4 This1 a3') //?
