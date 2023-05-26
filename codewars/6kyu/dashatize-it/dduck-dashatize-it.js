// dashatize-it
// Dashatize it
// difficulty: 6kyu
// https://www.codewars.com/kata/58223370aef9fc03fd000071

const dashatize = (num) => !isNaN(num) ? String(num).match(/[13579]|[24680]+/g).join('-') : 'NaN';


console.log(dashatize(274), "2-7-4", "Should return 2-7-4");
console.log(dashatize(5311), "5-3-1-1", "Should return 5-3-1-1");
console.log(dashatize(86320), "86-3-20", "Should return 86-3-20");
console.log(dashatize(974302), "9-7-4-3-02", "Should return 9-7-4-3-02");
console.log(dashatize(NaN), "NaN", "Should return NaN");
console.log(dashatize(0), "0", "Should return 0");
console.log(dashatize(-1), "1", "Should return 1");
console.log(dashatize(-28369), "28-3-6-9", "Should return 28-3-6-9");
