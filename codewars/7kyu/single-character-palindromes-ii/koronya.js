// [JS][7kyu] Single character palindromes II
// single-character-palindromes-ii
// https://www.codewars.com/kata/5a66ea69e6be38219f000110/train/javascript

const solve = (str) => {
  const strLen = str.length
  const halfIndex = Math.floor(strLen / 2)
  let diffCount = 0
  for (let i = 0; i < halfIndex; i += 1 || 0) {
    if (str[i] !== str[strLen - 1 - i]) {
      diffCount += 1
    }
  }

  return strLen % 2 !== 0 ? diffCount <= 1 : diffCount === 1
}

solve('abba') === false
solve('abbaa') === true
solve('abbx') === true
solve('aa') === false
solve('ab') === true
solve('abcba') === true
