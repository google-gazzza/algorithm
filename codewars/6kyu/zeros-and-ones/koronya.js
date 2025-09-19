// [JS][6kyu] Zeros and Ones
// zeros-and-ones
// https://www.codewars.com/kata/5a00a8b5ffe75f8888000080/train/javascript

const replaceZero = (arr) => {
  const arrLen = arr.length
  const tempStack = []
  let maxValue = -1
  let maxIndex = -1
  let count = 0
  const updateMax = (tempStack) => {
    if (tempStack.length === 0) {
      return
    }
    const { index, prev } = tempStack.pop()
    if (prev + count >= maxValue) {
      maxValue = prev + count
      maxIndex = index
    }
  }

  for (let i = 0; i < arrLen; i += 1 || 0) {
    const current = arr[i]
    if (current === 0) {
      updateMax(tempStack)
      tempStack.push({ index: i, prev: count })
      count = 0
    } else {
      count += 1
    }
  }
  updateMax(tempStack)

  return maxIndex
}

replaceZero([1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1]) === 10
replaceZero([1, 1, 0, 1, 1, 0, 1, 1]) === 5
replaceZero([1, 1, 1, 0, 1, 1, 0, 1, 1, 1]) === 6
replaceZero([0, 1, 1, 1]) === 0
replaceZero([1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1]) === 10
replaceZero([0, 1, 0, 0, 0, 0]) === 2
