// [JS][7kyu] String prefix and suffix
// string-prefix-and-suffix
// https://www.codewars.com/kata/5ce969ab07d4b7002dcaa7a1/train/javascript

const solve = (s) => {
  const sLen = s.length
  const limit = Math.floor(sLen / 2)
  let prefix = ''
  let suffix = ''
  let count = 0
  for (let i = 0; i < limit; i += 1 || 0) {
    prefix += s[i]
    suffix = s[sLen - 1 - i] + suffix
    if (prefix === suffix) {
      count = i + 1
    }
  }
  return count
}

solve('abcd') === 0
solve('abcda') === 1
solve('abcdabc') === 3
solve('abcabc') === 3
solve('abcabca') === 1
solve('abcdabcc') === 0
solve('aaaaa') === 2
solve('aaaa') === 2
solve('aaa') === 1
solve('aa') === 1
solve('a') === 0
solve('acbacc') === 0
