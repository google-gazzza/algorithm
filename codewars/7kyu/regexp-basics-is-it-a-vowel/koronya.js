// [JS][7kyu] Regexp Basics - is it a vowel?
// regexp-basics-is-it-a-vowel
// https://www.codewars.com/kata/567bed99ee3451292c000025/train/javascript

// const REGEX = /aeiouAEIOU/
const REGEX = /^[aeiou]$/i

String.prototype.vowel = function () {
  return REGEX.test(this)
}

''.vowel() === false
'a'.vowel() === true
'E'.vowel() === true
'ou'.vowel() === false
'z'.vowel() === false
'lol'.vowel() === false

