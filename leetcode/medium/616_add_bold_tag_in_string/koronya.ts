// [Medium] 616. Add Bold Tag in String
// 616_add_bold_tag_in_string

// https://leetcode.com/problems/add-bold-tag-in-string
// Runtime: 84 ms, faster than 82.61% of TypeScript online submissions for Add Bold Tag in String.
// Memory Usage: 42.5 MB, less than 78.26% of TypeScript online submissions for Add Bold Tag in String.

function addBoldTag(s: string, words: string[]): string {
  const numSet = new Set<number>()
  words.forEach((word) => {
    const wordLen: number = word.length
    let prevIndex: number = s.indexOf(word)
    while (prevIndex !== -1) {
      const limit: number = prevIndex + wordLen
      for (let i: number = prevIndex; i < limit; i += 1) {
        numSet.add(i)
      }
      prevIndex = s.indexOf(word, prevIndex + 1)
    }
  })

  const sLen: number = s.length
  let boldOpen: boolean = false
  let result: string = ''
  for (let i: number = 0; i < sLen; i += 1) {
    const str = s[i]
    if (numSet.has(i)) {
      if (boldOpen === true) {
        result += str
      } else {
        boldOpen = true
        result += `<b>${str}`
      }
    } else {
      if (boldOpen === true) {
        boldOpen = false
        result += `</b>${str}`
      } else {
        result += str
      }
    }
  }
  if (boldOpen === true) {
    result += '</b>'
  }

  return result
}

addBoldTag('abcxyz123', ['abc', '123']) //?
addBoldTag('aaabbcc', ['aaa', 'aab', 'bc']) //?
