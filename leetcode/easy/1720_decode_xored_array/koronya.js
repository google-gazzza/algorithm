// [Easy] 1720. Decode XORed Array
// 1720_decode_xored_array

// https://leetcode.com/problems/decode-xored-array
// Runtime: 128 ms, faster than 49.51% of JavaScript online submissions for Decode XORed Array.
// Memory Usage: 44.5 MB, less than 98.69% of JavaScript online submissions for Decode XORed Array.

/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
const decode = function (encoded, first) {
  const resultArr = [first]
  let prev = first
  encoded.forEach((num) => {
    prev = num ^ prev
    resultArr.push(prev)
  })

  return resultArr
}

decode([1, 2, 3], 1) //?
decode([6, 2, 7, 3], 4) //?
