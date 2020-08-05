// credit-card-mask
// Credit Card Mask
// difficulty: 7kyu
// https://www.codewars.com/kata/5412509bd436bd33920011bc/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/7kyu/credit-card-mask

const maskify = (cc) => cc.length > 4 ? '#'.repeat(cc.length - 4) + cc.slice(cc.length - 4) : cc;



console.log(maskify('4556364607935616'), '############5616');
console.log(maskify('1'), '1');
console.log(maskify('11111'), '#1111');
