// simple-string-reversal
// simple string reversal
// difficulty: 7kyu
// https://www.codewars.com/kata/5a71939d373c2e634200008e/

const solve = (str) => {
  let reversedWord = str.split(' ')
    .map((e) => [...e].reverse().join(''))
    .reverse()
    .join('');
  reversedWord = [...reversedWord];
  
  [...str].forEach((e, i) => {
    if (e === ' ') {
      reversedWord.splice(i, 0, ' ');
    }
  });
  
  return reversedWord.join('');
};


console.log(solve("codewars"), "srawedoc");
console.log(solve("your code"), "edoc ruoy");
console.log(solve("your code rocks"), "skco redo cruoy");
console.log(solve("i love codewars"), "s rawe docevoli");
