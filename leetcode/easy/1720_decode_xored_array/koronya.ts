// [Easy] 1720. Decode XORed Array
// 1720_decode_xored_array

// https://leetcode.com/problems/decode-xored-array
// Runtime: 144 ms, faster than 68.42% of TypeScript online submissions for Decode XORed Array.
// Memory Usage: 45.2 MB, less than 100.00% of TypeScript online submissions for Decode XORed Array./ Memory Usage: 45.1 MB, less than 100.00% of TypeScript online submissions for Decode XORed Array.

/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
function decode(encoded: number[], first: number): number[] {
  const resultArr: number[] = [first]
  let prev: number = first
  encoded.forEach((num) => {
    prev = num ^ prev
    resultArr.push(prev)
  })

  return resultArr
}

decode([1, 2, 3], 1) //?
decode([6, 2, 7, 3], 4) //?
