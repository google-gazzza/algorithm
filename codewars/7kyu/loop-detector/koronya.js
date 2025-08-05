// [JS][7kyu] Loop Detector
// loop-detector
// https://www.codewars.com/kata/68851563123e161332d2a84b/train/javascript

const hasLoop = (indices) => {
  const indicesLength = indices.length
  const visited = new Set()
  let currentIndex = 0
  while (currentIndex < indicesLength) {
    if (visited.has(currentIndex)) {
      return true
    }
    visited.add(currentIndex)
    currentIndex = indices[currentIndex]
  }

  return false
}

hasLoop([1, 2, 3, 4, 2]) === true
hasLoop([1, 2, 3, 4, 5]) === false
hasLoop([0]) === true
hasLoop([3, 2, 1, 6]) === false
hasLoop([1, 0]) === true

hasLoop([3, 2, 1, 4]) === false
hasLoop([2, 0, 1, 5]) === true
hasLoop([]) === false
