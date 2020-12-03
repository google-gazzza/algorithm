// regexp-basics-is-it-a-vowel
// Regexp Basics - is it a vowel?
// difficulty: 7kyu
// https://www.codewars.com/kata/567bed99ee3451292c000025/

String.prototype.vowel = function () {
  return !!this.match(/^[aeiou]$/gi);
};

console.log(''.vowel(), false);
console.log('a'.vowel(), true);
console.log('E'.vowel(), true);
console.log('ou'.vowel(), false);
console.log('z'.vowel(), false);
console.log('lol'.vowel(), false);
console.log(','.vowel());
