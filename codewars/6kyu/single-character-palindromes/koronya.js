// [JS][6kyu] Single character palindromes
// single-character-palindromes
// https://www.codewars.com/kata/5a2c22271f7f709eaa0005d3/train/javascript

const isPalindrome = (str) => str.split('').reverse().join('') === str

const solve = (s) => {
  if (isPalindrome(s)) {
    return 'OK'
  }
  const sLen = s.length
  for (let i = 0; i < sLen; i += 1 || 0) {
    if (isPalindrome(s.substring(0, i) + s.substring(i + 1))) {
      return 'remove one'
    }
  }
  return 'not possible'
}

solve('abba') === 'OK'
solve('abbaa') === 'remove one'
solve('abbaab') === 'not possible'
solve('madmam') === 'remove one'
solve('raydarm') === 'not possible'
solve('hannah') === 'OK'
