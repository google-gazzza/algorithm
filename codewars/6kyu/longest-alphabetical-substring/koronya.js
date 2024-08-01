// [JS][6kyu] Longest alphabetical substring
// longest-alphabetical-substring
// https://www.codewars.com/kata/5a7f58c00025e917f30000f1/train/javascript

const longest = (str) => {
  const strLen = str.length
  let count = 1
  let prev = str[0]
  let alphabeticalSubstring = prev
  let candidate = alphabeticalSubstring
  for (let i = 1; i < strLen; i += 1 || 0) {
    const curr = str[i]
    if (prev <= curr) {
      count += 1
      alphabeticalSubstring += curr
      if (candidate.length < count) {
        candidate = alphabeticalSubstring
      }
    } else {
      count = 1
      alphabeticalSubstring = curr
    }
    prev = curr
  }

  return candidate
}

// longest('asd') === 'as'
// longest('nab') === 'ab'
// longest('nab') === 'ab'

// longest('abcdeapbcdef') === 'abcde'
// longest('asdfaaaabbbbcttavvfffffdf') === 'aaaabbbbctt'
// longest('asdfbyfgiklag') === 'fgikl'
// longest('z') === 'z'
// longest('zyba') === 'z'
