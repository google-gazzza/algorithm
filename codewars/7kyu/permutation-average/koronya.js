// [JS][7kyu] Permutation Average
// permutation-average
// https://www.codewars.com/kata/56b18992240660a97c00000a/train/javascript

const permutationAverage = (n) => {
  const arr = n.toString().split('')
  const arrLen = arr.length
  const numSet = new Set()
  const dfs = (accStr, partialArr) => {
    if (accStr.length === arrLen) {
      const num = Number(accStr)
      if (!numSet.has(num)) {
        numSet.add(num)
      }
      return
    }
    const partialArrLen = partialArr.length
    for (let i = 0; i < partialArrLen; i += 1 || 0) {
      const tempArr = [...partialArr]
      const str = tempArr.splice(i, 1)[0]
      dfs(accStr + str, tempArr)
    }
  }
  dfs('', arr)

  if (numSet.size === 0) {
    return 0
  }
  return Math.round([...numSet].reduce((a, b) => a + b, 0) / numSet.size)
}

// permutationAverage(25)
// permutationAverage(2) === 2
// permutationAverage(25) === 39
// permutationAverage(737) === 629
// permutationAverage(1397) === 5555
// permutationAverage(76853) === 64444
