// [JS][6kyu] The most common letter
// the-most-common-letter
// https://www.codewars.com/kata/5a434a9dc5e284724f000011/train/javascript

const LOWERCASE_REGEX = /[a-z]/

const replaceCommon = (string, letter) => {
  const strMap = new Map()
  string
    .split('')
    .filter((char) => LOWERCASE_REGEX.test(char))
    .forEach((char) => {
      if (strMap.has(char)) {
        strMap.set(char, strMap.get(char) + 1)
      } else {
        strMap.set(char, 1)
      }
    })
  const commonLetter = [...strMap].sort((a, b) => b[1] - a[1])[0][0]
  return string.replace(/[^ ]/g, (char) => (char === commonLetter ? letter : char))
}

replaceCommon('my mom loves me as never did', 't') === 'ty tot loves te as never did'
replaceCommon('real talk bro', 'n') === 'neal talk bno'
replaceCommon('great job go ahead', 'k') === 'grekt job go khekd'
replaceCommon('yyyaaa twwww ttt uuu ccca', 'p') === 'yyyppp twwww ttt uuu cccp'
