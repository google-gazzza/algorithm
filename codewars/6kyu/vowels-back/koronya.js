// [JS][6kyu] Vowels Back
// vowels-back
// https://www.codewars.com/kata/57cfd92c05c1864df2001563/train/javascript

const EXCEPTION_LIST = ['c', 'o', 'd', 'e']
const VOWEL_LIST = ['a', 'e', 'i', 'o', 'u']
const isVowel = (char) => VOWEL_LIST.includes(char)

const CHAR_CODE_OF_LOWER_A = 'a'.charCodeAt(0)
const CHAR_CODE_OF_LOWER_Z = 'z'.charCodeAt(0)

const getTransformChar = (s) => {
  if (s === 'c') {
    return 'b'
  }
  if (s === 'o') {
    return 'n'
  }
  if (s === 'd') {
    return 'a'
  }
  if (s === 'e') {
    return 'a'
  }

  let candidateChar = ''
  if (isVowel(s)) {
    const charCode = s.charCodeAt(0)
    const newCharCode = charCode - 5
    if (newCharCode < CHAR_CODE_OF_LOWER_A) {
      candidateChar = String.fromCharCode(newCharCode + 26)
    } else {
      candidateChar = String.fromCharCode(newCharCode)
    }
  } else {
    const charCode = s.charCodeAt(0)
    const newCharCode = charCode + 9
    if (newCharCode > CHAR_CODE_OF_LOWER_Z) {
      candidateChar = String.fromCharCode(newCharCode - 26)
    } else {
      candidateChar = String.fromCharCode(newCharCode)
    }
  }

  return EXCEPTION_LIST.includes(candidateChar) ? s : candidateChar
}

const vowelBack = (s) =>
  s
    .split('')
    .map((char) => getTransformChar(char))
    .join('')

vowelBack('a')

vowelBack('testcase') === 'tabtbvba'
vowelBack('codewars') === 'bnaafvab'
vowelBack('exampletesthere') === 'agvvyuatabtqaaa'
