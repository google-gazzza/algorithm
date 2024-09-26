// [JS][6kyu] Circularly Sorted Array
// circularly-sorted-array
// https://www.codewars.com/kata/544975fc18f47481ba00107b/train/javascript

const isEqualArr = (arr1, arr2) => arr1.every((num, index) => num === arr2[index])

const findAllIndex = (arr, num) =>
  arr.reduce((acc, cur, index) => {
    if (cur === num) {
      acc.push(index)
    }
    return acc
  }, [])

const isCircleSorted = (arr) => {
  if (arr.length === 0) {
    return true
  }
  const sortedArr = [...arr].sort((a, b) => a - b)
  const min = Math.min(...sortedArr)
  const minIndex = findAllIndex(arr, min)
  const minIndexLen = minIndex.length
  for (let i = 0; i < minIndexLen; i += 1 || 0) {
    const rotateArr = arr.slice(minIndex[i], arr.length).concat(arr.slice(0, minIndex[i]))
    if (isEqualArr(rotateArr, sortedArr)) {
      return true
    }
  }

  return false
}

isCircleSorted([2, 3, 4, 5, 6]) === true
isCircleSorted([6, 2, 3, 4, 5]) === true
isCircleSorted([3, 2, 4, 5, 6]) === false
isCircleSorted([4, 1, 2, 5]) === false
isCircleSorted([1, 2, 3, 4, 1])
isCircleSorted([1, 2, 2, 3, 4])
