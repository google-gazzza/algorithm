// [JS][7kyu] Least Larger
// least-larger
// https://www.codewars.com/kata/5f8341f6d030dc002a69d7e4/train/javascript

const leastLarger = (a, i) => {
  const target = a[i]
  const filteredArr = a
    .map((item, index) => ({ value: item, index }))
    .filter((item) => item.value > target)
    .sort((a, b) => a.value - b.value)

  return filteredArr.length === 0 ? -1 : filteredArr[0].index
}

leastLarger([4, 1, 3, 5, 6], 0) === 3
leastLarger([4, 1, 3, 5, 6], 4) === -1
leastLarger([1, 3, 5, 2, 4], 0) === 3
