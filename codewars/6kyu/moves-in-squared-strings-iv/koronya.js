// [JS][6kyu] Moves in squared strings (IV)
// moves-in-squared-strings-iv
// https://www.codewars.com/kata/56dbf59b0a10feb08c000227/train/javascript

const diag2Sym = (strng) => {
  const strArr = strng.split('\n')
  const n = strArr.length
  let result = ''
  for (let col = n - 1; col >= 0; col -= 1) {
    let str = ''
    for (let row = n - 1; row >= 0; row -= 1) {
      strArr[row][col]
      str += strArr[row][col]
    }
    result += str + '\n'
  }
  result = result.substring(0, result.length - 1)
  return result
}

const rot90Counter = (strng) => {
  const strArr = strng.split('\n')
  const n = strArr.length
  let result = ''
  for (let col = n - 1; col >= 0; col -= 1) {
    let str = ''
    for (let row = 0; row < n; row += 1) {
      strArr[row][col]
      str += strArr[row][col]
    }
    result += str + '\n'
  }
  result = result.substring(0, result.length - 1)
  return result
}

const selfieDiag2Counterclock = (strng) => {
  const firstArr = strng.split('\n')
  const secondArr = diag2Sym(strng).split('\n')
  const thirdArr = rot90Counter(strng).split('\n')
  const n = firstArr.length

  return Array.from({ length: n }, (_, i) => {
    return firstArr[i] + '|' + secondArr[i] + '|' + thirdArr[i]
  }).join('\n')
}

const oper = (fct, s) => fct(s)

const s = 'abcd\nefgh\nijkl\nmnop'

// diag2Sym(s)
// rot90Counter(s)
// selfieDiag2Counterclock(s)
// oper(diag2Sym, s)
