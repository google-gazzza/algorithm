// [Medium] 758. Bold Words in String
// 758_bold_words_in_string

// https://leetcode.com/problems/bold-words-in-string
// Runtime: 105 ms, faster than 50.00% of TypeScript online submissions for Bold Words in String.
// Memory Usage: 40.9 MB, less than 100.00% of TypeScript online submissions for Bold Words in String.


function boldWords(words: string[], s: string): string {
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

// boldWords(['ab', 'bc'], 'aabcd') //?
// boldWords(['ab', 'cb'], 'aabcd') //?

// boldWords(['ab', 'bc'], 'aabcdeab') //?

boldWords(['e', 'cab', 'de', 'cc', 'db'], 'cbccceeead') //?
