// [Medium] 2109. Adding Spaces to a String
// 2109_adding_spaces_to_a_string

// https://leetcode.com/problems/adding-spaces-to-a-string/
// Runtime: 220 ms, faster than 62.95% of JavaScript online submissions for Adding Spaces to a String.
// Memory Usage: 82.1 MB, less than 57.63% of JavaScript online submissions for Adding Spaces to a String.

function addSpaces(s: string, spaces: number[]): string {
  let resultStr: string = ''
  let prev: number = 0
  spaces.forEach((space) => {
    resultStr += `${s.substring(prev, space)} `
    prev = space
  })
  resultStr += s.substring(prev)
  return resultStr
}
