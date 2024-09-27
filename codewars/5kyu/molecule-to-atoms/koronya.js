// [JS][5kyu] Molecule to atoms
// molecule-to-atoms
// https://www.codewars.com/kata/52f831fa9d332c6591000511/train/javascript

const isLowerCase = (str) => /^[a-z]+$/.test(str)
const isNumber = (str) => /^[0-9]+$/.test(str)
const isOpenBracket = (str) => str === '(' || str === '[' || str === '{'
const isCloseBracket = (str) => str === ')' || str === ']' || str === '}'

const setObjToValue = (obj, key, value) => {
  if (obj[key]) {
    obj[key] += value
  } else {
    obj[key] = value
  }
}

const modifyCount = (n1, n2) => 10 * n1 + n2

const modifyStringToArray = (formula) => {
  const formulaLen = formula.length
  const result = []
  let prevString = formula[0]
  let prevCount = 0
  for (let i = 1; i < formulaLen; i += 1) {
    const char = formula[i]
    switch (true) {
      case isOpenBracket(char):
      case isCloseBracket(char):
        if (prevCount !== 0) {
          result.push(prevCount)
          prevCount = 0
        }
        if (prevString !== '') {
          result.push(prevString)
          prevString = ''
        }
        result.push(char)
        break
      case isLowerCase(char):
        prevString += char
        break
      case isNumber(char):
        if (prevString !== '') {
          result.push(prevString)
          prevString = ''
        }
        prevCount = modifyCount(prevCount, Number(char))
        break
      default:
        if (prevCount !== 0) {
          result.push(prevCount)
          prevCount = 0
        }
        if (prevString !== '') {
          result.push(prevString)
          prevString = ''
        }
        prevString = char
    }
  }
  if (prevString !== '') {
    result.push(prevString)
  }
  if (prevCount !== 0) {
    result.push(prevCount)
  }

  return modifyEmptyCountToOneCount(result)
}

const hasCountString = (str) => (!isOpenBracket(str) && !isNumber(str)) || isCloseBracket(str)

const modifyEmptyCountToOneCount = (arr) => {
  const limit = arr.length - 1
  return arr.reduce((acc, cur, index) => {
    const nextNum = index < limit ? arr[index + 1] : null
    if (hasCountString(cur) && !isNumber(nextNum)) {
      acc.push(cur)
      acc.push(1)
      return acc
    }

    acc.push(cur)
    return acc
  }, [])
}

const parseMolecule = (formula) => {
  const resultArr = [{}]
  const arr = modifyStringToArray(formula)
  const arrLen = arr.length
  let index = 0
  while (index < arrLen) {
    const char = arr[index]
    switch (true) {
      case isOpenBracket(char):
        resultArr.push({})
        index += 1
        break
      case isCloseBracket(char):
        const count = arr[index + 1]
        const obj = resultArr.pop()
        const prevObj = resultArr[resultArr.length - 1]
        Object.keys(obj).forEach((key) => {
          setObjToValue(prevObj, key, obj[key] * count)
        })
        index += 2
        break
      default:
        setObjToValue(resultArr[resultArr.length - 1], char, arr[index + 1])
        index += 2
    }
  }

  return resultArr.pop()
}

// parseMolecule('H2O')
// parseMolecule('Mg(OH)2')
// parseMolecule('K4[ON(SO3)2]2')
// parseMolecule('(C5H5)Fe(CO)2CH3')
