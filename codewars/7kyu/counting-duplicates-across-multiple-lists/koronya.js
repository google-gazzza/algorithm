// [JS][7kyu] Counting Duplicates Across Multiple Lists
// counting-duplicates-across-multiple-lists
// https://www.codewars.com/kata/6113c2dc3069b1001b8fdd05/train/javascript

const countDuplicates = (name, age, height) => {
  const itemLen = name.length
  const uniqueSet = new Set()
  name.forEach((item, idx) => {
    uniqueSet.add(`${item}-${age[idx]}-${height[idx]}`)
  })
  return itemLen - uniqueSet.size
}

const name = ['John', 'Beth', 'Beth', 'Beth', 'Bill']
const age = [37, 23, 23, 23, 46]
const height = [183, 170, 170, 170, 175]

countDuplicates(name, age, height) === 2
