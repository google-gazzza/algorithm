// [JS][7kyu] Clean Nesting Tree
// clean-nesting-tree
// https://www.codewars.com/kata/67c9c1cdf96c66388eb35cd4/train/javascript

const isNested = (item) => item.length !== 0
const isNotEqualArr = (arr) => new Set(arr).size > 1

const isInvalidArr = (arr) => isNotEqualArr(arr.map((item) => isNested(item)))

const isCleanlyNested = (xs) => {
  const stack = []
  stack.push(xs)
  while (stack.length > 0) {
    let arr = stack.shift()
    if (!arr) {
      continue
    }
    if (isInvalidArr(arr)) {
      return false
    }
    arr.forEach((item) => stack.push(item))
  }

  return true
}

// isCleanlyNested([]) === true
// isCleanlyNested([[], []]) === true
// isCleanlyNested([
//   [[], [], []],
//   [[], [[]]],
// ]) === false
// isCleanlyNested([[[[[]], [[]]], [[]]], [[]]]) === true
// isCleanlyNested([
//   [
//     [
//       [[[], [], [], []], [[[[]], [[]], [[]]]]],
//       [[], [], [], [], [], []],
//     ],
//   ],
//   [[], [], [], []],
// ]) === true
// isCleanlyNested([[[], [], [], [], []]]) === true
// isCleanlyNested([
//   [
//     [[], [], []],
//     [[], [], []],
//     [[], [], []],
//     [[], [], [], [], [], []],
//   ],
// ]) === true
// isCleanlyNested([[], [[], [[], [[], [], [], []], [[[], [], [], []], [], [], [[], [], [], [], [], []]], []], []], [], [], [], []]) === false
// isCleanlyNested([[], [[], [], []], []]) === false
// isCleanlyNested([[], [], [[], [[], [], [], []], [], []], [], [], []]) === false
