// [Easy] 1704. Determine if String Halves Are Alike
// 1704_determine_if_string_halves_are_alike

// https://leetcode.com/problems/determine-if-string-halves-are-alike
// Runtime: 80 ms, faster than 92.31% of TypeScript online submissions for Determine if String Halves Are Alike.
// Memory Usage: 40.3 MB, less than 57.69% of TypeScript online submissions for Determine if String Halves Are Alike.
const VOWELS: string[] = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
const getCountOfVowels = (arr: string[]): number => arr.filter((str: string): boolean => VOWELS.includes(str)).length

function halvesAreAlike(s: string): boolean {
  const sLen: number = s.length
  const sArr: string[] = s.split('')
  const a: string[] = sArr.slice(0, sLen / 2)
  const b: string[] = sArr.slice(sLen / 2)
  return getCountOfVowels(a) === getCountOfVowels(b)
}
