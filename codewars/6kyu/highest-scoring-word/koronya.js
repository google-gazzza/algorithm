// [JS][6kyu] Highest Scoring Word
// highest-scoring-word
// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

const CHAR_CODE_OF_LOWER_A = 'a'.charCodeAt(0)

const getPoint = (str) => str.charCodeAt(0) - CHAR_CODE_OF_LOWER_A + 1

const high = (x) => {
  const arr = x.split(' ').map((item) => [item, item.split('').reduce((acc, cur) => acc + getPoint(cur), 0)])
  const arrLen = arr.length
  let maxIndex = -1
  let max = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < arrLen; i += 1 || 0) {
    const num = arr[i][1]
    if (num > max) {
      max = num
      maxIndex = i
    }
  }
  return arr[maxIndex][0]
}

high('man i need a taxi up to ubud')
