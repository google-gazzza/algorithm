// https://leetcode.com/problems/last-stone-weight
// Runtime: 48 ms, faster than 98.52% of JavaScript online submissions for Last Stone Weight.
// Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions for Last Stone Weight.
const insertionSort = (arr, insertItem) => {
  let index = -1
  const arrLen = arr.length
  for (let i = 0; i < arrLen; i += 1) {
    const item = arr[i]
    if (insertItem <= item) {
      index = i
      break
    }
  }
  if (index === -1) {
    arr.push(insertItem)
  } else {
    arr.splice(index, 0, insertItem)
  }
}
const lastStoneWeight = stones => {
  stones.sort((a, b) => a - b)
  while (stones.length > 1) {
    const largestStone = stones.pop()
    const num2Stone = stones.pop()
    const diff = largestStone - num2Stone
    if (diff > 0) {
      insertionSort(stones, diff)
    }
  }
  return stones.length === 1
    ? stones[0]
    : 0
}

// 처음에는 lastStoneWeight2 방법으로 풀었고, 튜닝해서 lastStoneWeight으로 변경!
// Runtime: 56 ms, faster than 84.05% of JavaScript online submissions for Last Stone Weight.
// Memory Usage: 35.1 MB, less than 100.00% of JavaScript online submissions for Last Stone Weight.
const lastStoneWeight2 = stones => {
  while (stones.length > 1) {
    stones.sort((a, b) => a - b)
    const largestStone = stones.pop()
    const num2Stone = stones.pop()
    const diff = largestStone - num2Stone
  
    if (diff > 0) {
      stones.push(diff)
    }
  }

  return stones.length === 1
    ? stones[0]
    : 0
}