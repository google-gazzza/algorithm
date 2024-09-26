// string-incrementer
// String incrementer
// difficulty: 5kyu
// https://www.codewars.com/kata/54a91a4883a7de5d7800009c

const incrementString = (strng) => {
  const str = (strng.match(/[a-z]/g) || ['']).join('');
  const numStr = (strng.match(/[0-9]+/) || ['0'])[0];
  const num = String(parseInt(numStr, 10) + 1).padStart(numStr.length, 0);
  
  return `${str}${num}`;
};


console.log(incrementString('foobar000'), 'foobar001');
console.log(incrementString('foo'), 'foo1');
console.log(incrementString('foobar001'), 'foobar002');
console.log(incrementString('foobar99'), 'foobar100');
console.log(incrementString('foobar099'), 'foobar100');
console.log(incrementString(''), '1');
