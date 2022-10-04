// [JS][5kyu] Sort the odd
// sort-the-odd
// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

const sortArray = (array) => {
  const arr = array.filter((item) => item != null)
  const evenMap = new Map()
  arr.forEach((item, index) => {
    if (item % 2 === 0) {
      evenMap.set(index, item)
    }
  })
  const oddArr = arr.filter((item) => item % 2 !== 0).sort((a, b) => a - b)
  const resultArr = []
  const arrLen = arr.length
  for (let i = 0; i < arrLen; i += 1 || 0) {
    if (evenMap.has(i)) {
      resultArr.push(evenMap.get(i))
    } else {
      resultArr.push(oddArr.shift())
    }
  }
  return resultArr
}

// sortArray([5, 3, 2, 8, 1, 4])
// sortArray([5, 3, 1, 8, 0])
// sortArray([])
sortArray([7, 2, 4, 1, undefined, 5])
