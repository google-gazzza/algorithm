// [Easy] 2138. Divide a String Into Groups of Size k
// 2138_divide_a_string_into_groups_of_size_k

// https://leetcode.com/problems/divide-a-string-into-groups-of-size-k
// Runtime: 81 ms, faster than 94.44% of TypeScript online submissions for Divide a String Into Groups of Size k.
// Memory Usage: 44.9 MB, less than 5.56% of TypeScript online submissions for Divide a String Into Groups of Size k.

function divideString(s: string, k: number, fill: string): string[] {
  const sLen = s.length
  const resultArr: string[] = []
  let targetIndex: number = 1
  let str = s[0]
  while (targetIndex < sLen) {
    if (targetIndex % k === 0) {
      resultArr.push(str)
      str = s[targetIndex]
    } else {
      str += s[targetIndex]
    }
    targetIndex += 1
  }
  resultArr.push(str.padEnd(k, fill))

  return resultArr
}
