// [Easy] 2220. Minimum Bit Flips to Convert Number
// 2220_minimum_bit_flips_to_convert_number

// https://leetcode.com/problems/minimum-bit-flips-to-convert-number
// Runtime: 118 ms, faster than 25.00% of TypeScript online submissions for Minimum Bit Flips to Convert Number.
// Memory Usage: 44.5 MB, less than 25.00% of TypeScript online submissions for Minimum Bit Flips to Convert Number.

function minBitFlips(start: number, goal: number): number {
  const startArr = start.toString(2).split('')
  const goalArr = goal.toString(2).split('')
  const startArrLen = startArr.length
  const goalArrLen = goalArr.length
  const shortArr = startArrLen > goalArrLen ? goalArr : startArr
  const longArr = startArrLen > goalArrLen ? startArr : goalArr
  const sameLengthCuttedLongArr = longArr.splice(longArr.length - shortArr.length)
  const restLongArr = longArr
  let count = 0
  shortArr.forEach((item, index) => {
    if (item !== sameLengthCuttedLongArr[index]) {
      count += 1
    }
  })
  count += restLongArr.filter((item) => item === '1').length

  return count
}
