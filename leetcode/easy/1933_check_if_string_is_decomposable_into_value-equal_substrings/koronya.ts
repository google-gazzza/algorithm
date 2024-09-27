// [Easy] 1933. Check if String Is Decomposable Into Value-Equal Substrings
// 1933_check_if_string_is_decomposable_into_value-equal_substrings

// https://leetcode.com/problems/check-if-string-is-decomposable-into-value-equal-substrings
// Runtime: 76 ms, faster than 100.00% of TypeScript online submissions for Check if String Is Decomposable Into Value-Equal Substrings.
// Memory Usage: 41.2 MB, less than 100.00% of TypeScript online submissions for Check if String Is Decomposable Into Value-Equal Substrings.

function isDecomposable(s: string): boolean {
  const sLen: number = s.length
  let before: string = s[0]
  let count: number = 1
  const arr: number[] = []
  for (let i: number = 1; i < sLen; i += 1) {
    const str: string = s[i]
    if (before === str) {
      count += 1
    } else {
      arr.push(count)
      count = 1
      before = str
    }
  }
  arr.push(count)
  const candidateArr: number[] = arr.filter((item) => item % 3 !== 0)
  return candidateArr.length === 1 && candidateArr[0] % 3 === 2
}

// isDecomposable('000111000') //?
// isDecomposable('00111000') //?
// isDecomposable('00011111222') //?
// isDecomposable('011100022233') //?
isDecomposable('66666666666677722') //?
isDecomposable('66666666666677722222') //?
isDecomposable('66666666666677722222222') //?
