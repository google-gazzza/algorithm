// [JS][6kyu] Bitcoin statistics
// bitcoin-statistics
// https://www.codewars.com/kata/5a7f6b615084d75df6000032/train/javascript

const getFilteredArray = (arr, len) => arr.slice(len, arr.length - len)
const getResults = (arr) => {
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  const avg = arr.reduce((acc, cur) => acc + cur, 0) / arr.length
  return [min, avg, max]
}
const getMinAvgMax = (toDiscard, data) => {
  const arr = data.map((item) => getFilteredArray(item, toDiscard))
  const totalArr = arr.reduce((acc, curr) => acc.concat(curr), [])
  return [...arr.map((item) => getResults(item)), getResults(totalArr)]
}

getMinAvgMax(2, [
  [800, 1200, 2100, 4100, 1300, 700],
  [1000, 1500, 4500, 5000, 5800, 2000, 1500],
])

getMinAvgMax(2, [
  [800, 1200, 2100, 4100, 1300, 700],
  [1000, 1500, 4500, 5000, 5800, 2000, 1500],
  [1000, 1500, 4500, 5000, 5800, 2000, 1500],
  [1000, 1500, 4500, 5000, 5800, 2000, 1500],
  [1000, 1500, 4500, 5000, 5800, 2000, 1500],
])
