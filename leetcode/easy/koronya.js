// [Easy] 2164. Sort Even and Odd Indices Independently
// 2164_sort_even_and_odd_indices_independently

// https://leetcode.com/problems/sort-even-and-odd-indices-independently
// Runtime: 95 ms, faster than 81.36% of JavaScript online submissions for Sort Even and Odd Indices Independently.
// Memory Usage: 44.1 MB, less than 92.09% of JavaScript online submissions for Sort Even and Odd Indices Independently.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortEvenOdd = function (nums) {
  const oddArr = []
  const evenArr = []
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
  const resultArr = []
  for (let i = 0; i < oddArrLen; i += 1 || 0) {
    resultArr.push(evenArr[i])
    resultArr.push(oddArr[i])
  }
  if (evenArrLen > oddArrLen) {
    resultArr.push(evenArr[evenArrLen - 1])
  }

  return resultArr
}

sortEvenOdd([4, 1, 2, 3])
sortEvenOdd([4, 1, 2, 3, 9])



