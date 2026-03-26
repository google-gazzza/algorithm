// [JS][7kyu] Hells Kitchen
// hells-kitchen
// https://www.codewars.com/kata/57d1f36705c186d018000813/train/javascript

const VOWEL_LIST = ['A', 'E', 'I', 'O', 'U']

const convertChar = (char) => {
  if (char === 'A') {
    return '@'
  }
  if (VOWEL_LIST.includes(char)) {
    return '*'
  }
  return char
}

const gordon = (a) => {
  return a
    .split(' ')
    .map((item) => {
      const convertedCurr = item.toUpperCase().split('').map(convertChar).join('')
      return `${convertedCurr}!!!!`
    })
    .join(' ')
}

gordon('What feck damn cake') === 'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!'
gordon('are you stu pid') === '@R*!!!! Y**!!!! ST*!!!! P*D!!!!'
gordon('i am a chef') === '*!!!! @M!!!! @!!!! CH*F!!!!'
