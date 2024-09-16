// l2-triple-x
// L2: Triple X
// difficulty - 7kyu
// https://www.codewars.com/kata/568dc69683322417eb00002c
//  approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/7kyu/l2-triple-x

const tripleX = (str) => str.match('x') ? str.indexOf('x') === str.indexOf('xxx') : false;

// optional chaining
// const tripleX = (str) => str.match('x')?.index === str.match('xxx')?.index;

console.log(tripleX("abraxxxas"), true);
console.log(tripleX("xoxotrololololololoxxx"), false);
console.log(tripleX("soft kitty, warm kitty, xxxxx"), true);
console.log(tripleX("softx kitty, warm kitty, xxxxx"), false);
