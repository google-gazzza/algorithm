// [JS][6kyu] Consonant value
// consonant-value
// https://www.codewars.com/kata/59c633e7dcc4053512000073/train/javascript

const CHAR_CODE_OF_LOWER_A = 'a'.charCodeAt(0)

const AEIOU_ARR = ['a', 'e', 'i', 'o', 'u']

const getScore = (str) => str.charCodeAt(0) - CHAR_CODE_OF_LOWER_A + 1

const solve = (s) => {
  const sLen = s.length
  let maxCandidate = 0
  let target = 0
  for (let i = 0; i < sLen; i += 1 || 0) {
    const str = s[i]
    if (AEIOU_ARR.includes(str) === true) {
      if (target !== 0) {
        maxCandidate = Math.max(maxCandidate, target)
        target = 0
      }
    } else {
      target += getScore(str)
    }
  }
  if (target !== 0) {
    maxCandidate = Math.max(maxCandidate, target)
  }

  return maxCandidate
}

solve('zodiac') === 26
solve('chruschtschov') === 80
solve('khrushchev') === 38
solve('strength') === 57
solve('catchphrase') === 73
solve('twelfthstreet') === 103
solve('mischtschenkoana') === 80
