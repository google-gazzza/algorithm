// leetcode/easy/2697. Lexicographically Smallest Palindrome
// 2697-lexicographically-smallest-palindrome
// URL: https://leetcode.com/problems/lexicographically-smallest-palindrome/

function makeSmallestPalindrome(s: string): string {
  const left = [];
  const right = [];
  const arr = s.split("");

  for (let i = 0; i < arr.length / 2; i += 1) {
    const leftChar = arr[i];
    const rightChar = arr[arr.length - 1 - i];

    if (i === arr.length - 1 - i && arr.length % 2 === 1) {
      left.push(leftChar);
      break;
    }

    if (leftChar < rightChar) {
      left.push(leftChar);
      right.unshift(leftChar);
    } else {
      left.push(rightChar);
      right.unshift(rightChar);
    }
  }

  return left.join('') + right.join('');
}

console.log(makeSmallestPalindrome('egcfe'));
console.log(makeSmallestPalindrome('abcd'));
