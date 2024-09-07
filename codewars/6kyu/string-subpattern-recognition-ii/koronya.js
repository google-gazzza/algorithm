// [JS][6kyu] String subpattern recognition II
// string-subpattern-recognition-ii
// https://www.codewars.com/kata/5a4a391ad8e145cdee0000c4/train/javascript

const getGcd = (arr) => {
  const arrLen = arr.length
  let accGcd = arr[0]
  for (let i = 1; i < arrLen; i += 1 | 0) {
    accGcd = gcdWithTwo(accGcd, arr[i])
  }

  return accGcd
}

const gcdWithTwo = (a, b) => {
  if (a === 0) {
    return b
  }
  return gcdWithTwo(b % a, a)
}

const hasSubpattern = (string) => {
  const strMap = new Map()
  string.split('').forEach((char) => {
    strMap.set(char, (strMap.get(char) || 0) + 1)
  })
  const arr = [...strMap].sort((a, b) => a[1] - b[1]).map((item) => item[1])
  const count = arr[0]
  const gcd = getGcd(arr)

  return count !== 1 && gcd !== 1
}

hasSubpattern('a') === false
hasSubpattern('aaaa') === true
hasSubpattern('abcd') === false
hasSubpattern('babababababababa') === true
hasSubpattern('bbabbaaabbaaaabb') === true
hasSubpattern('123a123a123a') === true
hasSubpattern('123A123a123a') === false
hasSubpattern('12aa13a21233') === true
hasSubpattern('12aa13a21233A') === false
hasSubpattern('abcdabcaccd') === false
