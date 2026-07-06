// [JS][6kyu] Moves in squared strings (III)
// moves-in-squared-strings-iii
// https://www.codewars.com/kata/56dbeec613c2f63be4000be6/train/javascript

const rot90Clock = (strng) => {
  const strngArr = strng.split('\n')
  const n = strngArr.length
  const arr = Array.from(Array(n), () => Array(n))
  for (let i = 0; i < n; i += 1 || 0) {
    for (let j = 0; j < n; j += 1 || 0) {
      arr[i][j] = strngArr[n - 1 - j][i]
    }
  }
  return arr.map((item) => item.join('')).join('\n')
}
const diag1Sym = (strng) => {
  const strngArr = strng.split('\n')
  const n = strngArr.length
  const arr = Array.from(Array(n), () => Array(n))
  for (let i = 0; i < n; i += 1 || 0) {
    for (let j = 0; j < n; j += 1 || 0) {
      arr[j][i] = strngArr[i][j]
    }
  }
  return arr.map((item) => item.join('')).join('\n')
}
const selfieAndDiag1 = (strng) => {
  const arr1 = strng.split('\n')
  const arr2 = diag1Sym(strng).split('\n')
  const n = arr1.length
  return Array(n)
    .fill(0)
    .map((_, index) => `${arr1[index]}|${arr2[index]}`)
    .join('\n')
}
const oper = (fct, s) => fct(s)

const s = 'abcd\nefgh\nijkl\nmnop'

oper(diag1Sym, s) === 'aeim\nbfjn\ncgko\ndhlp'
oper(rot90Clock, s) === 'miea\nnjfb\nokgc\nplhd'
oper(selfieAndDiag1, s) === 'abcd|aeim\nefgh|bfjn\nijkl|cgko\nmnop|dhlp'

// abcd
// efgh
// ijkl
// mnop
