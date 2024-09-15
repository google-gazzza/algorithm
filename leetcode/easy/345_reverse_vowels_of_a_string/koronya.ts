// [Easy] 345. Reverse Vowels of a String
// 345_reverse_vowels_of_a_string

// https://leetcode.com/problems/reverse-vowels-of-a-string
// Runtime: 3132 ms, faster than 6.82% of TypeScript online submissions for Reverse Vowels of a String.
// Memory Usage: 46.6 MB, less than 52.27% of TypeScript online submissions for Reverse Vowels of a String.

const vowelsArr: string[] = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

function reverseVowels(s: string): string {
  const candidateArr: string[] = []
  const indexArr: number[] = []
  const sLen: number = s.length
  for (let i: number = 0; i < sLen; i += 1) {
    const str: string = s[i]
    if (vowelsArr.includes(str) === true) {
      indexArr.push(i)
      candidateArr.push(str)
    }
  }
  candidateArr.reverse()
  let targetIndex: number = -1
  return s
    .split('')
    .map((item, index) => {
      if (indexArr.includes(index) === true) {
        targetIndex += 1
        return candidateArr[targetIndex]
      }
      return item
    })
    .join('')
}

// reverseVowels('hello') //?
// reverseVowels('leetcode') //?
reverseVowels('aA') //?
