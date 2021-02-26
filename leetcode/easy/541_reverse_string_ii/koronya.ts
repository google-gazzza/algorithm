// [Easy] 541. Reverse String II
// 541_reverse_string_ii

// https://leetcode.com/problems/reverse-string-ii
// Runtime: 84 ms, faster than 87.50% of TypeScript online submissions for Reverse String II.
// Memory Usage: 43.2 MB, less than 50.00% of TypeScript online submissions for Reverse String II.

function reverseStr(s: string, k: number): string {
  const k2: number = k * 2
  const sLen: number = s.length
  const sArr: string[] = s.split('')
  const totalFragment: number = Math.ceil(sLen / k2)
  const diff: number = totalFragment * k2 - sLen
  let result: string = ''
  let start: number = 0
  for (let i: number = 0; i < totalFragment - 1; i += 1) {
    for (let j: number = k - 1; j >= 0; j -= 1) {
      result += s[start + j]
    }
    for (let j: number = 0; j < k; j += 1) {
      result += s[start + k + j]
    }
    start += k2
  }
  if (diff >= k) {
    result += sArr.slice(start).reverse().join('')
  } else {
    result += sArr
      .slice(start, start + k)
      .reverse()
      .join('')

    result += sArr.slice(start + k).join('')
  }

  return result
}

reverseStr('abcdefgh', 2) //?
reverseStr('abcdefg', 2) //?
reverseStr('abcdefg', 2) //?
reverseStr('abcde', 2) //?
reverseStr('abcdefghijklm', 2) //?
reverseStr('abcd', 4) //?
