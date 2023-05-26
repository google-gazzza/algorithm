// [Medium] 2070. Most Beautiful Item for Each Query
// 2070_most_beautiful_item_for_each_query

// https://leetcode.com/problems/most-beautiful-item-for-each-query
// Runtime: 456 ms, faster than 13.79% of JavaScript online submissions for Most Beautiful Item for Each Query.
// Memory Usage: 75.6 MB, less than 59.48% of JavaScript online submissions for Most Beautiful Item for Each Query.

const binarySearch = (items, target) => {
  let low = 0
  let high = items.length - 1
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

/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
const maximumBeauty = function (items, queries) {
  items.sort((a, b) => a[0] - b[0])
  const itemsLen = items.length
  for (let i = 1; i < itemsLen; i += 1 || 0) {
    items[i][1] = Math.max(items[i][1], items[i - 1][1])
  }

  return queries.map((query) => binarySearch(items, query))
}

// TLE...
const maximumBeauty3 = function (items, queries) {
  const queryMap = new Map()
  const sortedQueries = queries
    .map((item, index) => ({
      val: item,
      index,
    }))
    .sort((a, b) => b.val - a.val)
  let filteredItems = items

  return sortedQueries
    .map((query) => {
      const { val, index } = query
      if (queryMap.has(val) === true) {
        return { val: queryMap.get(val), index }
      }
      filteredItems = filteredItems.filter((item) => item[0] <= val)
      const count = filteredItems.length === 0 ? 0 : Math.max(...filteredItems.map((item) => item[1]))
      queryMap.set(query, count)
      return { val: count, index }
    })
    .sort((a, b) => a.index - b.index)
    .map((item) => item.val)
}

// TLE...
const maximumBeauty2 = function (items, queries) {
  const queryMap = new Map()
  return queries.map((query) => {
    if (queryMap.has(query) === true) {
      return queryMap.get(query)
    }
    const filteredQueries = items.filter((item) => item[0] <= query)
    const val = filteredQueries.length === 0 ? 0 : Math.max(...filteredQueries.map((item) => item[1]))
    queryMap.set(query, val)
    return val
  })
}

maximumBeauty(
  [
    [1, 2],
    [3, 2],
    [2, 4],
    [5, 6],
    [3, 5],
  ],
  [1, 2, 3, 4, 5, 6],
) //?

maximumBeauty(
  [
    [1, 2],
    [1, 2],
    [1, 3],
    [1, 4],
  ],
  [1],
) //?
maximumBeauty([[10, 1000]], [5]) //?
