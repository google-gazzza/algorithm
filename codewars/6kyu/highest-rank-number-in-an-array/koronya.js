// [JS][6kyu] Highest Rank Number in an Array
// highest-rank-number-in-an-array
// https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/train/javascript

const highestRank = (arr) => {
  const countMap = new Map()
  arr.forEach((num) => {
    countMap.set(num, (countMap.get(num) || 0) + 1)
  })
  return [...countMap].sort((a, b) => (b[1] === a[1] ? b[0] - a[0] : b[1] - a[1]))[0][0]
}

highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]) === 12
highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]) === 12
highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]) === 3
