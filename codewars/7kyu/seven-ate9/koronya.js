// [JS][7kyu] SevenAte9
// seven-ate9
// https://www.codewars.com/kata/559f44187fa851efad000087/train/javascript

const REGEXP = /797/

const sevenAte9 = (str) => {
  let result = str
  while (result.match(REGEXP)) {
    result = result.replace(REGEXP, '77')
  }

  return result
}

sevenAte9('797') === '77'
sevenAte9('7979797') === '7777'
sevenAte9('165561786121789797') === '16556178612178977'
sevenAte9('79712312') === '79712312'
