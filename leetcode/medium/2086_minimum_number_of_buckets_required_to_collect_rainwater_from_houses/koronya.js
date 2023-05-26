// [Easy] 2086. Minimum Number of Buckets Required to Collect Rainwater from Houses
// 2086_minimum_number_of_buckets_required_to_collect_rainwater_from_houses

// https://leetcode.com/problems/minimum-number-of-buckets-required-to-collect-rainwater-from-houses
// Runtime: 217 ms, faster than 8.57% of JavaScript online submissions for Minimum Number of Buckets Required to Collect Rainwater from Houses.
// Memory Usage: 95.3 MB, less than 5.72% of JavaScript online submissions for Minimum Number of Buckets Required to Collect Rainwater from Houses.

/**
 * @param {string} street
 * @return {number}
 */
const minimumBuckets = function (street) {
  const streetLen = street.length
  const isValidLeft = (index) => index !== 0 && street[index - 1] === '.'
  const isValidRight = (index) => index !== streetLen - 1 && street[index + 1] === '.'
  const houseArr = []
  for (let i = 0; i < streetLen; i += 1 || 0) {
    if (street[i] === 'H') {
      const arr = []
      if (isValidLeft(i) === true) {
        arr.push(i - 1)
      }
      if (isValidRight(i) === true) {
        arr.push(i + 1)
      }
      if (arr.length === 0) {
        return -1
      }
      houseArr.push(arr)
    }
  }

  let prev = -1
  let count = 0
  houseArr.forEach((house) => {
    const [left, right] = house
    if (prev !== left) {
      count += 1
      if (right == null) {
        prev = left
      } else {
        prev = right
      }
    }
  })

  return count
}

minimumBuckets('H..H')
minimumBuckets('.H.H.')
minimumBuckets('.HHH.')

minimumBuckets('.H.H.H')
