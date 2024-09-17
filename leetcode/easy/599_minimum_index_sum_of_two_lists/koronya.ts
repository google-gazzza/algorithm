// [Easy] 599. Minimum Index Sum of Two Lists
// 599_minimum_index_sum_of_two_lists

// https://leetcode.com/problems/minimum-index-sum-of-two-lists
// Runtime: 149 ms, faster than 46.15% of TypeScript online submissions for Minimum Index Sum of Two Lists.
// Memory Usage: 47.2 MB, less than 69.23% of TypeScript online submissions for Minimum Index Sum of Two Lists.

function findRestaurant(list1: string[], list2: string[]): string[] {
  const scoreMap = new Map<string, number>()
  const resultMap = new Map<number, string[]>()
  list1.forEach((item, index) => {
    scoreMap.set(item, index)
  })
  list2.forEach((item, index) => {
    if (scoreMap.has(item) === true) {
      const score = scoreMap.get(item)! + index
      if (resultMap.has(score)) {
        resultMap.get(score)!.push(item)
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
