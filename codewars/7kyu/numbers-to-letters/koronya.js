// [JS][7kyu] Numbers to Letters
// numbers-to-letters
// https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c/train/javascript

const numberToString = (numberString) => {
  if (numberString === '27') {
    return '!'
  }
  if (numberString === '28') {
    return '?'
  }
  if (numberString === '29') {
    return ' '
  }
  const reverseNum = 27 - Number(numberString)
  return String.fromCharCode(reverseNum + 96)
}

const switcher = (x) => {
  return x.map((num) => numberToString(num)).join('')
}

switcher(['24', '12', '23', '22', '4', '26', '9', '8']) === 'codewars'
switcher(['25', '7', '8', '4', '14', '23', '8', '25', '23', '29', '16', '16', '4']) === 'btswmdsbd kkw'
switcher(['4', '24']) === 'wc'
