// [JS][6kyu] Permute a Palindrome
// permute-a-palindrome
// https://www.codewars.com/kata/58ae6ae22c3aaafc58000079/train/javascript

const permuteAPalindrome = (input) => {
  const strMap = new Map()
  input.split('').forEach((char) => {
    strMap.set(char, (strMap.get(char) || 0) + 1)
  })

  return [...strMap].filter(([_, value]) => value % 2 === 1).length <= 1
}

permuteAPalindrome('a') === true
permuteAPalindrome('aa') === true
permuteAPalindrome('aaa') === true
permuteAPalindrome('baa') === true
permuteAPalindrome('aab') === true
permuteAPalindrome('baabcd') === false
permuteAPalindrome('racecars') === false
permuteAPalindrome('abcdefghba') === false
permuteAPalindrome('') === true
