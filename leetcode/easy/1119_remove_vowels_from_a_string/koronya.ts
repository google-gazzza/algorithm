// [Easy] 1119. Remove Vowels from a String
// 1119_remove_vowels_from_a_string

// https://leetcode.com/problems/remove-vowels-from-a-string
// Runtime: 72 ms, faster than 81.25% of TypeScript online submissions for Remove Vowels from a String.
// Memory Usage: 40.5 MB, less than 56.25% of TypeScript online submissions for Remove Vowels from a String.

const vowels: string[] = ['a', 'e', 'i', 'o', 'u']

function removeVowels(s: string): string {
  const sLen: number = s.length
  let resultStr: string = ''
  for (let i: number = 0; i < sLen; i += 1) {
    const str: string = s[i]
    if (vowels.includes(str) === false) {
      resultStr += str
    }
  }
  return resultStr
}

removeVowels('leetcodeisacommunityforcoders') //?
removeVowels('aeiou') //?
