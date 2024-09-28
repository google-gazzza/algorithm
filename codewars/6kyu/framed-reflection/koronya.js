// [JS][6kyu] Framed Reflection
// framed-reflection
// https://www.codewars.com/kata/581331293788bc1702001fa6/train/javascript

const reverseStr = (str) => str.split('').reverse().join('')

const mirror = (text) => {
  const lineArr = text.split(' ')
  // const strLen = lineArr[0].length
  const strLen = lineArr.reduce((acc, cur) => Math.max(acc, cur.length), 0)
  const totalLen = strLen + 4
  return [
    '*'.repeat(totalLen),
    ...lineArr.map((line) => {
      const spaceLen = strLen - line.length
      return `* ${reverseStr(line)}${' '.repeat(spaceLen)} *`
    }),
    '*'.repeat(totalLen),
  ].join('\n')
}

mirror('Codewars')
mirror('Hello World') === '*********\n* olleH *\n* dlroW *\n*********'
mirror('Codewars') === '************\n* srawedoC *\n************'
