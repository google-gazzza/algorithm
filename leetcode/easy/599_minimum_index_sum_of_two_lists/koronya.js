// [Easy] 599. Minimum Index Sum of Two Lists
// 599_minimum_index_sum_of_two_lists

// https://leetcode.com/problems/minimum-index-sum-of-two-lists
// Runtime: 92 ms, faster than 94.89% of JavaScript online submissions for Minimum Index Sum of Two Lists.
// Memory Usage: 47.3 MB, less than 49.15% of JavaScript online submissions for Minimum Index Sum of Two Lists.

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
const findRestaurant = function (list1, list2) {
  const scoreMap = new Map()
  const resultMap = new Map()
  list1.forEach((item, index) => {
    scoreMap.set(item, index)
  })
  list2.forEach((item, index) => {
    if (scoreMap.has(item) === true) {
      const score = scoreMap.get(item) + index
      if (resultMap.has(score)) {
        resultMap.get(score).push(item)
      } else {
        resultMap.set(score, [item])
      }
    }
  })
  return [...resultMap].sort((a, b) => a[0] - b[0])[0][1]
}

findRestaurant(['Shogun', 'Tapioca Express', 'Burger King', 'KFC'], ['Piatti', 'The Grill at Torrey Pines', 'Hungry Hunter Steakhouse', 'Shogun']) //?
findRestaurant(['Shogun', 'Tapioca Express', 'Burger King', 'KFC'], ['KFC', 'Shogun', 'Burger King']) //?
findRestaurant(['Shogun', 'Tapioca Express', 'Burger King', 'KFC'], ['KFC', 'Burger King', 'Tapioca Express', 'Shogun']) //?
findRestaurant(['Shogun', 'Tapioca Express', 'Burger King', 'KFC'], ['KNN', 'KFC', 'Burger King', 'Tapioca Express', 'Shogun']) //?
findRestaurant(['KFC'], ['KFC']) //?
