// [JS][7kyu] Lost number in number sequence
// lost-number-in-number-sequence
// https://www.codewars.com/kata/595aa94353e43a8746000120/train/javascript

const findDeletedNumber = (arr, mixArr) => {
  const aSet = new Set(arr)
  const bSet = new Set(mixArr)
  for (const item of aSet) {
    if (!bSet.has(item)) {
      return item
    }
  }

  return 0
}

findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5])
findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 9, 7, 4, 6, 2, 3, 8])
findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [5, 7, 6, 9, 4, 8, 1, 2, 3])
