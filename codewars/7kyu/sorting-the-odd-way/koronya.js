// [JS][7kyu] Sorting the Odd way!
// sorting-the-odd-way
// https://www.codewars.com/kata/57fb79784e2d0639c9000066/train/javascript

const sortItOut = (array) => {
  const arr = array.map((num) => (num % 1 === 0 ? { originalNum: num, modifyNum: num } : { originalNum: num, modifyNum: Math.floor(num) }))
  const oddArr = []
  const evenArr = []
  arr.forEach((item) => (item.modifyNum % 2 === 0 ? evenArr.push(item) : oddArr.push(item)))
  return [
    ...oddArr.sort((a, b) => a.originalNum - b.originalNum).map((item) => item.originalNum),
    ...evenArr.sort((a, b) => b.originalNum - a.originalNum).map((item) => item.originalNum),
  ]
}

// sortItOut([1, 2, 3, 4, 5, 6, 7, 8, 9])
// sortItOut([1.1, 2.2, 3.3, 4.4, 5.5, 6.6])
