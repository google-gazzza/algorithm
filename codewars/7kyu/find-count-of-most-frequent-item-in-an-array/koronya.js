// [JS][7kyu] Find Count of Most Frequent Item in an Array
// find-count-of-most-frequent-item-in-an-array
// https://www.codewars.com/kata/56582133c932d8239900002e/train/javascript

const mostFrequentItemCount = (collection) => {
  if (collection.length === 0) {
    return 0
  }
  const countMap = new Map()
  collection.forEach((item) => {
    countMap.set(item, (countMap.get(item) || 0) + 1)
  })
  return Math.max(...countMap.values())
}

mostFrequentItemCount([3, -1, -1]) === 2
mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]) === 5
mostFrequentItemCount([])
