// https://leetcode.com/problems/pancake-sorting
// Runtime: 56 ms, faster than 97.14% of JavaScript online submissions for Pancake Sorting.
// Memory Usage: 37.6 MB, less than 100.00% of JavaScript online submissions for Pancake Sorting.

const getMaxIndexOfArray = arr => {
  let max = Number.MIN_SAFE_INTEGER
  let maxIndex = -1
  for (let i = 0, arrLen = arr.length; i < arrLen; i += 1) {
    if (arr[i] > max) {
      max = arr[i]
      maxIndex = i
    }
  }
  return maxIndex + 1
}

const pancakeSort = A => {
  const resultArr = []
  let unsortedArr = A

  while (true) {
    const unsortedLen = unsortedArr.length
    if (unsortedLen < 1) {
      break
    }
    const maxIndex = getMaxIndexOfArray(unsortedArr)
    if (unsortedLen !== maxIndex) {
      if (maxIndex !== 1) {
        resultArr.push(maxIndex)
        unsortedArr = [...unsortedArr.slice(0, maxIndex).reverse(), ...unsortedArr.slice(maxIndex)]
      }

      resultArr.push(unsortedLen)
      unsortedArr = [...unsortedArr.slice(0, unsortedLen).reverse(), ...unsortedArr.slice(unsortedLen)]
    }
    unsortedArr.splice(unsortedArr.length - 1)
  }

  return resultArr
}
