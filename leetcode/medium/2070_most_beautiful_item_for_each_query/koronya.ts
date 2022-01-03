// [Medium] 2070. Most Beautiful Item for Each Query
// 2070_most_beautiful_item_for_each_query

// https://leetcode.com/problems/most-beautiful-item-for-each-query
// Runtime: 456 ms, faster than 13.79% of JavaScript online submissions for Most Beautiful Item for Each Query.
// Memory Usage: 75.6 MB, less than 59.48% of JavaScript online submissions for Most Beautiful Item for Each Query.

const binarySearch = (items: number[][], target: number): number => {
  let low: number = 0
  let high: number = items.length - 1
  while (low < high) {
    const mid = Math.floor((low + high + 1) / 2)
    if (items[mid][0] > target) {
      high = mid - 1
    } else {
      low = mid
    }
  }
  return items[low][0] <= target ? items[low][1] : 0
}

function maximumBeauty(items: number[][], queries: number[]): number[] {
  items.sort((a, b) => a[0] - b[0])
  const itemsLen: number = items.length
  for (let i: number = 1; i < itemsLen; i += 1) {
    items[i][1] = Math.max(items[i][1], items[i - 1][1])
  }

  return queries.map((query) => binarySearch(items, query))
}
