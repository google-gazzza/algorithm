// [JS][7kyu] Find Duplicates
// find-duplicates
// https://www.codewars.com/kata/5558cc216a7a231ac9000022/train/javascript

const duplicates = (arr) => {
  const resultSet = new Set()
  const itemSet = new Set()
  arr.forEach((item) => {
    if (itemSet.has(item) && !resultSet.has(item)) {
      resultSet.add(item)
    } else {
      itemSet.add(item)
    }
  })
  return [...resultSet]
}

duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, '5'])
