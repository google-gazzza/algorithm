// [Medium] 1910. Remove All Occurrences of a Substring
// 1910_remove_all_occurrences_of_a_substring

// https://leetcode.com/problems/remove-all-occurrences-of-a-substring
// Runtime: 84 ms, faster than 50.00% of TypeScript online submissions for Remove All Occurrences of a Substring.
// Memory Usage: 40.8 MB, less than 66.67% of TypeScript online submissions for Remove All Occurrences of a Substring.

function removeOccurrences(s: string, part: string): string {
  let resultStr: string = s
  const partLen: number = part.length
  let findIndex: number
  while (true) {
    findIndex = resultStr.indexOf(part)
    if (findIndex === -1) {
      break
    }
    resultStr = resultStr.substr(0, findIndex) + resultStr.substr(findIndex + partLen)
  }

  return resultStr
}

removeOccurrences('daabcbaabcbc', 'abc') //?
removeOccurrences('axxxxyyyyb', 'xy') //?
