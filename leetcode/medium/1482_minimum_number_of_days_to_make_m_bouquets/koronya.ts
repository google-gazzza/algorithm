// [Medium] 1482. Minimum Number of Days to Make m Bouquets
// 1482_minimum_number_of_days_to_make_m_bouquets

// https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets
// Runtime: 129 ms, faster than 100.00% of TypeScript online submissions for Minimum Number of Days to Make m Bouquets.
// Memory Usage: 50.5 MB, less than 100.00% of TypeScript online submissions for Minimum Number of Days to Make m Bouquets.

const getAvailableBouquets = (arr: number[], day: number, k: number): number => {
  let countBouquets = 0
  let countFlower = 0
  const arrLen = arr.length
  for (let i: number = 0; i < arrLen; i += 1) {
    if (arr[i] <= day) {
      countFlower += 1
    } else {
      countFlower = 0
    }
    if (countFlower === k) {
      countBouquets += 1
      countFlower = 0
    }
  }

  return countBouquets
}

function minDays(bloomDay: number[], m: number, k: number): number {
  if (bloomDay.length < m * k) {
    return -1
  }
  const max = Math.max(...bloomDay)
  const min = Math.min(...bloomDay)
  let left = min
  let right = max

  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (getAvailableBouquets(bloomDay, mid, k) < m) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return left
}
