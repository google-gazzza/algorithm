// Triple Trouble
// https://www.codewars.com/kata/5704aea738428f4d30000914/train/javascript

const tripleTrouble = (a, b, c) => a.split('')
  .map((v, i) => `${a[i]}${b[i]}${c[i]}`).join('');

console.log(tripleTrouble("this", "test", "lock"), "ttlheoiscstk");
console.log(tripleTrouble("aa", "bb", "cc"), "abcabc");
console.log(tripleTrouble("Bm", "aa", "tn"), "Batman");
console.log(tripleTrouble("LLh", "euo", "xtr"), "LexLuthor");
