// [JS][7kyu] Count the Combinations
// count-the-combinations
// https://www.codewars.com/kata/58e67378fd2d897b8a000110/train/javascript

const numCombo = (arr, num) => {
  const limit = arr.length - 1
  let result = 0
  const dfs = (sum, count, restArr) => {
    if (count === limit) {
      if (sum === num) {
        result += 1
      }
    } else {
      const restArrLen = restArr.length
      for (let i = 0; i <= restArrLen; i += 1 || 0) {
        const newArr = restArr.slice(i)
        const item = newArr.shift()
        dfs(sum + item, count + 1, newArr)
      }
    }
  }
  for (let i = 0; i <= limit; i += 1 || 0) {
    const newArr = arr.slice(i)
    const item = newArr.shift()
    dfs(item, 1, newArr)
  }
  return result
}

// numCombo([2, 0, 0, 0, 1], 2) === 1
// numCombo([2, 0, 0, 0, 1], 1) === 1
// numCombo([2, 0, 0, 0, 1], 3) === 3
// numCombo([0, 0, 0, 0, 0], 0) === 5
// numCombo([0, 0, 0, 0, 1], 1) === 4
// numCombo([0, 0, 0, 0, 1], 2) === 0
