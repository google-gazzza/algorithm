// [Easy] 1313. Decompress Run-Length Encoded List
// 1313_decompress_run-length_encoded_list

// https://leetcode.com/problems/decompress-run-length-encoded-list
// Runtime: 88 ms, faster than 88.25% of JavaScript online submissions for Decompress Run-Length Encoded List.
// Memory Usage: 38.7 MB, less than 89.31% of JavaScript online submissions for Decompress Run-Length Encoded List.
const decompressRLElist = nums => {
  const resultArr = []
  const halfNumsLen = nums.length / 2
  for (let i = 0; i < halfNumsLen; i = i + 1 | 0) {
    const [freq, val] = [nums[2 * i], nums[2 * i + 1]]
    for (let j = 0; j < freq; j = j + 1 | 0) {
      resultArr.push(val)
    }
  }

  return resultArr
}
