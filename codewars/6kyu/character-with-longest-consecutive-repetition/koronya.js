// [JS][6kyu] Character with longest consecutive repetition
// character-with-longest-consecutive-repetition
// https://www.codewars.com/kata/586d6cefbcc21eed7a001155/train/javascript

const longestRepetition = (s) => {
  const sLen = s.length
  let maxCount = 0
  let maxStr = ''
  let prevCount = 0
  let prev = ''
  for (let i = 0; i < sLen; i += 1 || 0) {
    const cur = s[i]
    if (cur === prev) {
      prevCount += 1
    } else {
      prev = cur
      prevCount = 1
    }
    if (prevCount > maxCount) {
      maxCount = prevCount
      maxStr = cur
    }
  }

  return [maxStr, maxCount]
}

longestRepetition('aaaabb')
longestRepetition('bbbaaabaaaa')
longestRepetition('cbdeuuu900')
longestRepetition('abbbbb')
longestRepetition('aabb')
longestRepetition('')
longestRepetition('ba')
