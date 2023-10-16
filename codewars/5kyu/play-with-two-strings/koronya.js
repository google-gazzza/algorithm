// [JS][5kyu] Play with two Strings
// play-with-two-strings
// https://www.codewars.com/kata/56c30ad8585d9ab99b000c54/train/javascript

const isUpperCase = (str) => str === str.toUpperCase()

const convertStr = (str) => (isUpperCase(str) === true ? str.toLowerCase() : str.toUpperCase())

const getConvertedStr = (arr, itemMap) => {
  return arr
    .map((item) => {
      const lowerStr = item.toLowerCase()
      return itemMap.has(lowerStr) && itemMap.get(lowerStr) % 2 === 1 ? convertStr(item) : item
    })
    .join('')
}

const workOnStrings = (a, b) => {
  const aMap = new Map()
  const bMap = new Map()
  const arrA = a.split('')
  const arrB = b.split('')
  arrA.forEach((str) => {
    const lowerStr = str.toLowerCase()
    aMap.set(lowerStr, (aMap.get(lowerStr) || 0) + 1)
  })
  arrB.forEach((str) => {
    const lowerStr = str.toLowerCase()
    bMap.set(lowerStr, (bMap.get(lowerStr) || 0) + 1)
  })

  return getConvertedStr(arrA, bMap) + getConvertedStr(arrB, aMap)
}

workOnStrings('abc', 'cde') === 'abCCde'
workOnStrings('abcdeFgtrzw', 'defgGgfhjkwqe') === 'abcDeFGtrzWDEFGgGFhjkWqE'
workOnStrings('abcdeFg', 'defgG') === 'abcDEfgDEFGg'
workOnStrings('abab', 'bababa') === 'ABABbababa'
