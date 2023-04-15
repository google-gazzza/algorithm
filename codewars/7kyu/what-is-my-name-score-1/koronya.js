// [JS][7kyu] What is my name score? #1
// what-is-my-name-score-1
// https://www.codewars.com/kata/576a29ab726f4bba4b000bb1/train/javascript

const CHARCODE_OF_UPPER_A = 'A'.charCodeAt(0)
const REGEX_ALPHA = /^[a-zA-Z]+$/
const isAlphabet = (str) => REGEX_ALPHA.test(str)
const getScore = (str) => {
  if (isAlphabet(str) === false) {
    return 0
  }
  if (str === 'z' || str === 'Z') {
    return 0
  }
  const charCode = str.toUpperCase().charCodeAt(0)
  const diff = charCode - CHARCODE_OF_UPPER_A

  return Math.floor(diff / 5) + 1
}

const nameScore = (name) => ({ [name]: name.split('').reduce((acc, item) => acc + getScore(item), 0) })

getScore('l')
getScore('L')
getScore('u')
getScore('a')
getScore('f')
getScore('F')

nameScore('Mary Jane')
nameScore('Luke Skywalker')
nameScore('Zoe Andrews')
nameScore('Greg Z MacDonald')
