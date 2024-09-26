// [Medium] 2137. Pour Water Between Buckets to Make Water Levels Equal
// 2137_pour_water_between_buckets_to_make_water_levels_equal

// https://leetcode.com/problems/pour-water-between-buckets-to-make-water-levels-equal
// Runtime: 403 ms, faster than 20.00% of JavaScript online submissions for Pour Water Between Buckets to Make Water Levels Equal.
// Memory Usage: 63.4 MB, less than 20.00% of JavaScript online submissions for Pour Water Between Buckets to Make Water Levels Equal.

const HUNDRED_THOUSAND = 10 ** 5

const getRoundNumber = (num) => {
  return Math.round(num * HUNDRED_THOUSAND) / HUNDRED_THOUSAND
}

/**
 * @param {number[]} buckets
 * @param {number} loss
 * @return {number}
 */
const equalizeWater = function (buckets, loss) {
  const retainPercent = (100 - loss) / 100
  let left = 0
  let right = HUNDRED_THOUSAND
  while (right - left > 0.00001) {
    const center = (left + right) / 2
    let need = 0
    let have = 0
    buckets.forEach((bucket) => {
      if (bucket >= center) {
        have += bucket - center
      } else {
        need += center - bucket
      }
    })
    if (have * retainPercent >= need) {
      left = center
    } else {
      right = center
    }
  }

  return getRoundNumber(left)
}

equalizeWater([1, 2, 7], 80)
equalizeWater([2, 4, 6], 50)
equalizeWater([5, 7, 11], 7)
