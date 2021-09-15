// [Easy] 2000. Reverse Prefix of Word
// 2000_reverse_prefix_of_word

// https://leetcode.com/problems/reverse-prefix-of-word
// Runtime: 72 ms, faster than 100.00% of TypeScript online submissions for Reverse Prefix of Word.
// Memory Usage: 40.5 MB, less than 10.00% of TypeScript online submissions for Reverse Prefix of Word.

function reversePrefix(word: string, ch: string): string {
  const findIndex: number = word.indexOf(ch)
  return findIndex === -1
    ? word
    : word
        .substr(0, findIndex + 1)
        .split('')
        .reverse()
        .join('') + word.substr(findIndex + 1)
}

reversePrefix('abcdefd', 'd') //?
reversePrefix('xyxzxe', 'z') //?
reversePrefix('abcd', 'z') //?
