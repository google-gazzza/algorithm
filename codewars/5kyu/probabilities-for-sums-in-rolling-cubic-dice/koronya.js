// [JS][5kyu] Probabilities for Sums in Rolling Cubic Dice
// probabilities-for-sums-in-rolling-cubic-dice
// https://www.codewars.com/kata/56f78a42f749ba513b00037f/train/javascript

const getPairCount = (arr) => {
  const arrLen = arr.length
  const pairSet = new Set()
  const dfs = (arr1, arr2) => {
    if (arr1.length === arrLen) {
      pairSet.add(arr1.join('-'))
      return
    }
    for (let i = 0; i < arr2.length; i += 1) {
      const newArr1 = [...arr1, arr2[i]]
      const newArr2 = arr2.filter((_, index) => index !== i)
      dfs(newArr1, newArr2)
    }
  }

  for (let i = 0; i < arrLen; i += 1 || 0) {
    dfs(
      [arr[i]],
      arr.filter((_, index) => index !== i),
    )
  }

  return pairSet.size
}

// getPairCount([1, 1, 6])
// getPairCount([1, 2, 5])
// getPairCount([1, 3, 4])

const rolldiceSumProb = (sum, dice) => {
  if (sum < dice || sum > dice * 6) {
    return 0
  }
  let prob = 0
  const candidateArr = []
  const dfs = (start, until, arr) => {
    if (until === 0) {
      if (arr.reduce((acc, cur) => acc + cur, 0) === sum) {
        prob += 1
        candidateArr.push([...arr])
      }
      return
    }
    for (let i = start; i <= 6; i += 1) {
      arr.push(i)
      dfs(i, until - 1, arr)
      arr.pop()
    }
  }

  for (let i = 1; i <= 6; i += 1) {
    dfs(i, dice - 1, [i])
  }

  const total = candidateArr.reduce((acc, cur) => acc + getPairCount(cur), 0)
  return total / 6 ** dice
}

rolldiceSumProb(11, 2)
rolldiceSumProb(8, 2)
rolldiceSumProb(8, 3)
rolldiceSumProb(9, 4)
