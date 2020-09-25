// https://www.hackerrank.com/challenges/the-birthday-bar/problem
function birthday (s, d, m) {
  const sLen = s.length
  let result = 0
  const koro = start => {
    let sum = 0
    let count = 0
    while (count < m) {
      sum += s[start + count]
      count += 1
    }
    if (sum === d) {
      return true
    }
    return false
  }

  for (let i = 0; i < sLen; i = i + 1 | 0) {
    if (koro(i) === true) {
      result += 1
    }
  }

  return result
}
