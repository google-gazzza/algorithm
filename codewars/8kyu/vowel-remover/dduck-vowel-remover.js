// vowel-remover
// Vowel remover
// difficulty: 8kyu
// https://www.codewars.com/kata/5547929140907378f9000039/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/8kyu/vowel-remover

const shortcut = (string) => string.replace(/[aeiou]/g, '');



console.log(shortcut('hello') == 'hll', 'encode failed. Your result: ' + shortcut('hello') + ' Expected result: hll');
console.log(shortcut('how are you today?') == 'hw r y tdy?', 'shortcut did not work properly');
console.log(shortcut('complain') == 'cmpln', 'shortcut did not work properly');
console.log(shortcut('never') == 'nvr', 'shortcut did not work properly');
