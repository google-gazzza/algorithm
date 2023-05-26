// [Easy] 1957. Delete Characters to Make Fancy String
// 1957_delete_characters_to_make_fancy_string

// https://leetcode.com/problems/delete-characters-to-make-fancy-string
// Runtime: 172 ms, faster than 95.00% of TypeScript online submissions for Delete Characters to Make Fancy String.
// Memory Usage: 51.8 MB, less than 85.00% of TypeScript online submissions for Delete Characters to Make Fancy String.

function makeFancyString(s: string): string {
  const sLen = s.length
  let resultStr: string = ''
  let prevStr = s[0]
  let prevCount = 1

  for (let i: number = 1; i < sLen; i += 1) {
    const str = s[i]
    if (str === prevStr) {
      if (prevCount < 2) {
        prevCount += 1
      }
    } else {
      resultStr += prevStr.repeat(prevCount)
      prevCount = 1
      prevStr = str
    }
  }
  resultStr += prevStr.repeat(prevCount)

  return resultStr
}

makeFancyString('leeetcode') //?
makeFancyString('aaabaaaa') //?
makeFancyString('aab') //?
