// [JS][6kyu] Texting with an old-school mobile phone
// texting-with-an-old-school-mobile-phone
// https://www.codewars.com/kata/5ca24526b534ce0018a137b5/train/javascript

const convertLowerCase = (str) => str.toLowerCase()
const isUpperCase = (str) => str === str.toUpperCase()
const isAlpha = (str) => /^[a-zA-Z]*$/.test(str)

const keyMap = new Map([
  ['.', '1'],
  [',', '11'],
  ['?', '111'],
  ['!', '1111'],
  ['a', '2'],
  ['b', '22'],
  ['c', '222'],
  ['d', '3'],
  ['e', '33'],
  ['f', '333'],
  ['g', '4'],
  ['h', '44'],
  ['i', '444'],
  ['j', '5'],
  ['k', '55'],
  ['l', '555'],
  ['m', '6'],
  ['n', '66'],
  ['o', '666'],
  ['p', '7'],
  ['q', '77'],
  ['r', '777'],
  ['s', '7777'],
  ['t', '8'],
  ['u', '88'],
  ['v', '888'],
  ['w', '9'],
  ['x', '99'],
  ['y', '999'],
  ['z', '9999'],
  [`'`, '*'],
  ['-', '**'],
  ['+', '***'],
  ['=', '****'],

  ['*', '*-'],
  ['#', '#-'],
  [' ', '0'],

  ['1', '1-'],
  ['2', '2-'],
  ['3', '3-'],
  ['4', '4-'],
  ['5', '5-'],
  ['6', '6-'],
  ['7', '7-'],
  ['8', '8-'],
  ['9', '9-'],
  ['0', '0-'],
])

const sendMessage = (message) => {
  let prevUpperCase = false
  const arr = message.split('').map((str) => {
    if (!isAlpha(str)) {
      return keyMap.get(str)
    }
    const isUpper = isUpperCase(str)
    const changeCase = (isUpper && !prevUpperCase) || (!isUpper && prevUpperCase)
    prevUpperCase = isUpper
    const targetStr = convertLowerCase(str)

    return `${changeCase ? '#' : ''}${keyMap.get(targetStr)}`
  })

  return arr.reduce((acc, cur) => {
    return acc + `${cur[0] === acc[acc.length - 1] ? ' ' : ''}` + cur
  }, '')
}

// sendMessage('hey') === '4433999'
// sendMessage('one two three') === '666 6633089666084477733 33'
// sendMessage('Hello World!') === '#44#33555 5556660#9#66677755531111'
// sendMessage('Def Con 1!') === '#3#33 3330#222#666 6601-1111'
// sendMessage('A-z') === '#2**#9999'
// sendMessage('1984') === '1-9-8-4-'
// sendMessage('Big thanks for checking out my kata') === '#22#444 4084426655777703336667770222443322255444664066688 806999055282'
// sendMessage('#NotMyPresident')
