// [Easy] 2062. Count Vowel Substrings of a String
// 2062_count_vowel_substrings_of_a_string

// https://leetcode.com/problems/count-vowel-substrings-of-a-string
// Runtime: 88 ms, faster than 100.00% of TypeScript online submissions for Count Vowel Substrings of a String.
// Memory Usage: 40.9 MB, less than 100.00% of TypeScript online submissions for Count Vowel Substrings of a String.

const vowelArr: string[] = ['a', 'e', 'i', 'o', 'u']

function countVowelSubstrings(word: string): number {
  const wordLen = word.length
  let count: number = 0
  const dfs = (str: string, vowelSet: Set<string>, start: number) => {
    if (vowelArr.includes(str) === false) {
      return
    }
    vowelSet.add(str)
    if (vowelSet.size === 5) {
      count += 1
    }
    dfs(word[start], vowelSet, start + 1)
  }
  for (let i: number = 0; i < wordLen; i += 1) {
    dfs(word[i], new Set(), i + 1)
  }

  return count
}

countVowelSubstrings('aeiouu') //?
countVowelSubstrings('unicornarihan') //?
countVowelSubstrings('cuaieuouac') //?
countVowelSubstrings('bbaeixoubb') //?
