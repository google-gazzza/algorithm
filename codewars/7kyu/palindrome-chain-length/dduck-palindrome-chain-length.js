// palindrome-chain-length
// Palindrome chain length
// difficulty: 7kyu
// https://www.codewars.com/kata/525f039017c7cd0e1a000a26
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/7kyu/palindrome-chain-length

const palindromeChainLength = (n, step = 0) => {
  const str = String(n);
  
  if (str.substr(0, Math.ceil(str.length / 2)) ===
    [...str.substr(Math.floor(str.length / 2))].reverse().join('')) {
    return step;
  }
  
  return palindromeChainLength(n + Number(str.split('').reverse().join('')), step + 1);
};



console.log(palindromeChainLength(87), 4);
