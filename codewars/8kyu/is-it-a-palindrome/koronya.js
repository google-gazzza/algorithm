// [JS][8kyu] Is it a palindrome?
// is-it-a-palindrome
// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript

const isPalindrome = (x) => {
  const xLen = x.length
  const limit = Math.floor(xLen / 2)
  for (let i = 0; i < limit; i += 1 || 0) {
    if (x[i].toLowerCase() !== x[xLen - 1 - i].toLowerCase()) {
      return false
    }
  }
  return true
}

isPalindrome('aba')
isPalindrome('Abba')
isPalindrome('Abcba')
