// [JS][5kyu] Simple string expansion
// simple-string-expansion
// https://www.codewars.com/kata/5a793fdbfd8c06d07f0000d5/train/javascript

const solve = (str) => {
  const stack = []
  let result = ''
  const strLen = str.length
  for (let i = 0; i < strLen; i += 1 || 0) {
    const char = str[i]
    if (char === '(') {
      stack.push(result)
      result = ''
    } else if (char === ')') {
      const temp = stack.pop()
      const lastChar = temp[temp.length - 1]
      if (!isNaN(lastChar)) {
        const num = Number(lastChar)
        result = temp.slice(0, -1) + result.repeat(num)
      } else {
        result = temp + result
      }
    } else {
      result += char
    }
  }

  return result
}

solve('3(ab)') === 'ababab'
solve('2(a3(b))') === 'abbbabbb'
solve('3(b(2(c)))') === 'bccbccbcc'
solve('k(a3(b(a2(c))))') === 'kabaccbaccbacc'
