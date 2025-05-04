// [JS][7kyu] Turn any word into a beef taco
// turn-any-word-into-a-beef-taco
// https://www.codewars.com/kata/59414b46d040b7b8f7000021/train/javascript

const VALID_CHAR_INFO = {
  t: 'tomato',
  l: 'lettuce',
  c: 'cheese',
  g: 'guacamole',
  s: 'salsa',
}

const getItem = (char) => {
  const lowerChar = char.toLowerCase()
  if (/[aeiou]/.test(lowerChar)) {
    return 'beef'
  }
  if (VALID_CHAR_INFO[lowerChar]) {
    return VALID_CHAR_INFO[lowerChar]
  }
  return ''
}

const tacofy = (word) => {
  const resultArr = word.split('').reduce(
    (acc, cur) => {
      const item = getItem(cur)
      return item ? [...acc, item] : acc
    },
    ['shell'],
  )
  resultArr.push('shell')
  return resultArr
}

tacofy('')
tacofy('a')
tacofy('ggg')
tacofy('ogl')
tacofy('ydjkpwqrzto')
tacofy('CODe waRs')
