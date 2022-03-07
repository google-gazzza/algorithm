// [Easy] 2086. Minimum Number of Buckets Required to Collect Rainwater from Houses
// 2086_minimum_number_of_buckets_required_to_collect_rainwater_from_houses

// https://leetcode.com/problems/minimum-number-of-buckets-required-to-collect-rainwater-from-houses
// Runtime: 132 ms, faster than 100.00% of TypeScript online submissions for Minimum Number of Buckets Required to Collect Rainwater from Houses.
// Memory Usage: 71.6 MB, less than 100.00% of TypeScript online submissions for Minimum Number of Buckets Required to Collect Rainwater from Houses.

function minimumBuckets(street: string): number {
  const streetLen = street.length
  const isValidLeft = (index: number): boolean => index !== 0 && street[index - 1] === '.'
  const isValidRight = (index: number): boolean => index !== streetLen - 1 && street[index + 1] === '.'
  const houseArr = []
  for (let i: number = 0; i < streetLen; i += 1) {
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
