// [JS][8kyu] count lowercase letters in a string
// count-lowercase-letters-in-a-string
// https://www.codewars.com/kata/56a946cd7bd95ccab2000055/train/javascript

const lowercaseCount = (str) => str.replace(/[^a-z]/g, '').length

lowercaseCount('abc') === 3
lowercaseCount('abcABC123') === 3
lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~") === 3
lowercaseCount('') === 0
lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~") === 0
lowercaseCount('abcdefghijklmnopqrstuvwxyz') === 26
