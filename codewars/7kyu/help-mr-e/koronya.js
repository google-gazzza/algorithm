// [JS][7kyu] Help Mr. E
// help-mr-e
// https://www.codewars.com/kata/56ce2f90aa4ac7a4770019fa/train/javascript

const FILTER_ARR = ['.', ',', '?', '!', '_']

const evenator = (str) => {
  return str
    .split(' ')
    .map((word) => {
      const filteredWord = word
        .split('')
        .filter((char) => !FILTER_ARR.includes(char))
        .join('')
      return filteredWord.length % 2 === 0 ? filteredWord : filteredWord + filteredWord[filteredWord.length - 1]
    })
    .join(' ')
}

evenator('') === ''
evenator('tHiS sEnTeNcE iS eVeN.') === 'tHiS sEnTeNcE iS eVeN'
evenator('even') === 'even'
evenator('even od!') === 'even od'
evenator('even oddd.') === 'even oddd'
evenator('underscore is not considered a word..in this case,') === 'underscore is nott considered aa wordin this case'

evenator('f') === 'ff'
evenator('I got a hole in 1!') === 'II gott aa hole in 11'
evenator('evenn') === 'evennn'
evenator('even odd!') === 'even oddd'
evenator('eve odd.') === 'evee oddd'
