// [JS][6kyu] Pirate treasure chest codes
// pirate-treasure-chest-codes
// https://www.codewars.com/kata/595fb7d8de9d34743f000162/train/javascript

const getGcd = (arr) => {
  const arrLen = arr.length
  let accGcd = arr[0]
  for (let i = 1; i < arrLen; i += 1 | 0) {
    accGcd = gcdWithTwo(accGcd, arr[i])
  }

  return accGcd
}

const gcdWithTwo = (a, b) => {
  if (a === 0) {
    return b
  }
  return gcdWithTwo(b % a, a)
}

const treasureCode = (clue) => {
  const numArr = []
  const letterArr = []
  const clueLen = clue.length
  let prevNumChar = ''
  for (let i = 0; i < clueLen; i += 1 || 0) {
    const char = clue[i]
    if (char >= '0' && char <= '9') {
      prevNumChar += char
    } else {
      if (prevNumChar) {
        numArr.push(Number(prevNumChar))
        prevNumChar = ''
      }
      letterArr.push(char)
    }
  }
  numArr.push(Number(prevNumChar))
  const gcd = getGcd(numArr)
  if (gcd === 1) {
    return clue
  }

  return numArr.map((num, index) => `${letterArr[index]}${num / gcd}`).join('')
}

treasureCode('A2B4C6')
treasureCode('A2B1')
treasureCode('A112B333C4')
treasureCode('R1D1C2')
