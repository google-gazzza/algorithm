// [JS][7kyu] The Speed of Letters
// the-speed-of-letters
// https://www.codewars.com/kata/5fc7caa854783c002196f2cb/train/javascript

const CHAR_CODE_A = 'A'.charCodeAt(0)
const getSpace = (str) => str.charCodeAt(0) - CHAR_CODE_A

const speedify = (input) => {
  const strMap = new Map()
  input.split('').map((char, index) => {
    console.log(char, index)
    strMap.set(index + getSpace(char), char)
  })
  const arr = [...strMap].sort((a, b) => a[0] - b[0])
  const arrSize = arr[arr.length - 1][0] + 1
  const resultArr = Array.from({ length: arrSize }, (_) => ' ')
  arr.map(([index, char]) => {
    resultArr[index] = char
  })
  return resultArr.join('')
}

speedify('AZ') === 'A                         Z'
speedify('ABC') === 'A B C'
speedify('ACE') === 'A  C  E'
speedify('CBA') === '  A'
