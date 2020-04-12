// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

const duplicateEncode = (word) => {
  const characters = word.toLowerCase().split('');
  const map = new Map([...new Set(characters)].map((v) => [v, 0]));
  characters.forEach((v) => map.set(v, map.get(v) + 1));
  
  return characters.map((v) => (map.get(v) === 1 ? '(' : ')')).join('');
};

console.log(duplicateEncode('din'), '(((');
console.log(duplicateEncode('recede'), '()()()');
console.log(duplicateEncode('Success'), ')())())', 'should ignore case');
console.log(duplicateEncode('(( @'), '))((');


// best practice in codewars
//
// function duplicateEncode(word){
//   return word
//     .toLowerCase()
//     .split('')
//     .map( function (a, i, w) {
//       return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//     })
//     .join('');
// }
