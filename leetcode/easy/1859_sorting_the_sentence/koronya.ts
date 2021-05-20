// [Easy] 1859. Sorting the Sentence
// 1859_sorting_the_sentence

// https://leetcode.com/problems/sorting-the-sentence
// Runtime: 80 ms, faster than 84.21% of TypeScript online submissions for Sorting the Sentence.
// Memory Usage: 39.3 MB, less than 39.47% of TypeScript online submissions for Sorting the Sentence.

function sortSentence(s: string): string {
  return s
    .split(' ')
    .map((item) => [item.slice(0, item.length - 1), item.slice(item.length - 1)])
    .sort((a: string[], b: string[]): number => Number(a[1]) - Number(b[1]))
    .reduce((acc, cur) => acc + ' ' + cur[0], '')
    .slice(1)
}

sortSentence('is2 sentence4 This1 a3') //?
