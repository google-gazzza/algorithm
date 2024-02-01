// https://leetcode.com/problems/keyboard-row
// 두번째로 풀이한 방식
// Runtime: 40 ms, faster than 99.69% of JavaScript online submissions for Keyboard Row.
// Memory Usage: 33.7 MB, less than 87.50% of JavaScript online submissions for Keyboard Row.
const rowA = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
const rowB = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
const rowC = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const rowMap = new Map()
rowA.map(item => rowMap.set(item, 1))
rowB.map(item => rowMap.set(item, 2))
rowC.map(item => rowMap.set(item, 3))
const getRowNum = str => rowMap.get(str.toLowerCase())

const findWords = words => {
  return words.reduce((acc, word) => {
    const firstRowNum = getRowNum(word[0])
    const strArr = [...word]
    const flag = strArr.every(str => getRowNum(str) === firstRowNum)
    if (flag === true) {
      return [...acc, word]
    } else {
      return acc
    }
  }, [])
}


// const rowA = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
// const rowB = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
// const rowC = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const getRowNum2 = str => {
  const lowerStr = str.toLowerCase()
  if (rowA.includes(lowerStr)) {
    return 1
  } else if (rowB.includes(lowerStr)) {
    return 2
  } else {
    return 3
  }
}
// 처음 풀이했던 방식
// Runtime: 52 ms, faster than 70.13% of JavaScript online submissions for Keyboard Row.
// Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions for Keyboard Row.
const findWords2 = words => {
  return words.reduce((acc, word) => {
    const wordLen = word.length
    let beforeRowNum = getRowNum2(word[0])
    for (let i = 1; i < wordLen; i = i + 1 | 0) {
      if (getRowNum2(word[i]) !== beforeRowNum) {
        beforeRowNum = 0
        break
      }
    }
    if (beforeRowNum !== 0) {
      return [...acc, word]
    } else {
      return acc
    }
  }, [])
}
