// [JS][6kyu] Flip Your Stack (of Pancakes)
// flip-your-stack-of-pancakes
// https://www.codewars.com/kata/6472390e0d0bb1001d963536/train/javascript

const flip = (stack) => {
  const result = []
  let prevZeroIndex = false
  while (stack.length > 0) {
    const max = Math.max(...stack)
    const maxIndex = prevZeroIndex ? 0 : stack.lastIndexOf(max)
    if (maxIndex === stack.length - 1) {
      prevZeroIndex = false
      stack.pop()
    } else if (maxIndex === 0) {
      prevZeroIndex = false
      stack.reverse()
      result.push(stack.length - 1)
    } else {
      prevZeroIndex = true
      result.push(maxIndex)
      stack = stack
        .slice(0, maxIndex + 1)
        .reverse()
        .concat(stack.slice(maxIndex + 1))
    }
  }

  return result
}

// flip([3, 5, 4, 2, 1])
// flip([2, 3, 2, 2, 1])

// flip([1, 5, 8, 3])

// flip([5, 1, 2, 3, 4])
// flip([1, 3, 5, 8])

// flip([2, 3, 1, 2, 4, 2])
//   flip([4, 1, 3, 2, 4, 6, 3, 9, 1])
