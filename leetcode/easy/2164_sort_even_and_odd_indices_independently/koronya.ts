// [Easy] 2164. Sort Even and Odd Indices Independently
// 2164_sort_even_and_odd_indices_independently

// https://leetcode.com/problems/sort-even-and-odd-indices-independently
// Runtime: 122 ms, faster than 77.78% of TypeScript online submissions for Sort Even and Odd Indices Independently.
// Memory Usage: 45 MB, less than 77.78% of TypeScript online submissions for Sort Even and Odd Indices Independently.

function sortEvenOdd(nums: number[]): number[] {
  const oddArr: number[] = []
  const evenArr: number[] = []
  nums.forEach((num, index) => {
    if (index % 2 !== 0) {
      oddArr.push(num)
    } else {
      evenArr.push(num)
    }
  })
  oddArr.sort((a, b) => b - a)
  evenArr.sort((a, b) => a - b)
  const oddArrLen = oddArr.length
  const evenArrLen = evenArr.length
  const resultArr: number[] = []
  for (let i: number = 0; i < oddArrLen; i += 1) {
    resultArr.push(evenArr[i])
    resultArr.push(oddArr[i])
  }
  if (evenArrLen > oddArrLen) {
    resultArr.push(evenArr[evenArrLen - 1])
  }

  return resultArr
}
