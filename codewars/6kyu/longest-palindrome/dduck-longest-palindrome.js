// longest-palindrome
// https://www.codewars.com/kata/54bb6f887e5a80180900046b

const getLongestGap = (s, leftIndex, rightIndex, max) => {
  while (s[leftIndex] && s[leftIndex] === s[rightIndex]) {
    leftIndex -= 1;
    rightIndex += 1;
  }
  return Math.max(max, rightIndex - leftIndex - 1);
};

const longestPalindrome = (s, index = 0, max = 0) => {
  if (index >= s.length) {
    return max;
  }
  
  max = Math.max(max, getLongestGap(s, index, index, max), getLongestGap(s, index, index + 1, max));
  
  return longestPalindrome(s, index + 1, max);
};

console.log(longestPalindrome("a"), 1);
console.log(longestPalindrome("aa"), 2);
console.log(longestPalindrome("baa"), 2);
console.log(longestPalindrome("aab"), 2);
console.log(longestPalindrome("zyabyz"), 6, "Are you sure that is a palindrome?");
console.log(longestPalindrome("baabcd"), 4);
console.log(longestPalindrome("baablkj12345432133d"), 9);
