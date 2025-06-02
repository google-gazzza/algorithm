// [JS][6kyu] Sentence Calculator
// sentence-calculator
// https://www.codewars.com/kata/5970fce80ed776b94000008b/train/javascript

const CHAR_CODE_LOWER_A = 97
const CHAR_CODE_UPPER_A = 65

const isLowerAlpha = (c) => /^[a-z]$/.test(c)
const isUpperAlpha = (c) => /^[A-Z]$/.test(c)
const isDigit = (c) => /^[0-9]$/.test(c)

const lettersToNumbers = (s) => {
  return s.split('').reduce((acc, cur) => {
    // prettier-ignore
    const score = isLowerAlpha(cur)
      ? cur.charCodeAt(0) - CHAR_CODE_LOWER_A + 1
      : isUpperAlpha(cur)
        ? (cur.charCodeAt(0) - CHAR_CODE_UPPER_A + 1) * 2
        : isDigit(cur)
            ? Number(cur)
            : 0
    return acc + score
  }, 0)
}

lettersToNumbers('I Love You') === 170
lettersToNumbers('ILoveYou') === 170
lettersToNumbers('ARE YOU HUNGRY?') === 356
lettersToNumbers('oops, i did it again!') === 152
lettersToNumbers('Give me 5!') === 73
lettersToNumbers('Give me five!') === 110
