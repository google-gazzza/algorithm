/*
953_verifying_an_alien_dictionary

# leetcode/easy/953. Verifying an Alien Dictionary
Difficulty: easy
URL: https://leetcode.com/problems/verifying-an-alien-dictionary/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
function isAlienSorted(words, order) {
    var convertedWords = words.slice()
        .map(function (e) { return __spreadArray([], e).map(function (char) { return order.indexOf(char); }); });
    var sortedWords = convertedWords.slice();
    sortedWords.sort(function (a, b) {
        for (var i = 0; i < b.length; i += 1) {
            if (a[i] === undefined) {
                return -1;
            }
            if (a[i] > b[i]) {
                return 0;
            }
            if (a[i] < b[i]) {
                return -1;
            }
        }
        return 0;
    });
    return JSON.stringify(convertedWords) === JSON.stringify(sortedWords);
}
// test
console.log(isAlienSorted(['hello', 'leetcode'], 'hlabcdefgijkmnopqrstuvwxyz'));
// // true
console.log(isAlienSorted(['word', 'world', 'row'], 'worldabcefghijkmnpqstuvxyz'));
// // false
console.log(isAlienSorted(['apple', 'app'], 'abcdefghijklmnopqrstuvwxyz'));
// // false
console.log((isAlienSorted(['app', 'apple'], 'abcdefghijklmnopqrstuvwxyz')));
// true
