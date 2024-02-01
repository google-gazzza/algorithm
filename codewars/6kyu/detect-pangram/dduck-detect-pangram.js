// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

const isPangram = (string) => new Set(string.toLowerCase().match(/[a-z]/gi)).size === 26;

console.log(isPangram('The quick brown fox jumps over the lazy dog.'), true);
console.log(isPangram('This is not a pangram.'), false);
