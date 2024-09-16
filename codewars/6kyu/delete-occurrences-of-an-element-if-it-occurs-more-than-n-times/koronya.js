// [JS][6kyu] Delete occurrences of an element if it occurs more than n times
// delete-occurrences-of-an-element-if-it-occurs-more-than-n-times
// https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript

const deleteNth = (arr, n) => {
  const numMap = new Map()
  const result = []
  arr.forEach((num) => {
    const count = numMap.get(num) || 0
    if (count < n) {
      numMap.set(num, count + 1)
      result.push(num)
    }
  })

  return result
}

deleteNth([20, 37, 20, 21], 1)
deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)
