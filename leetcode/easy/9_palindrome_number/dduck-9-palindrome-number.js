/*
9-palindrome-number

# leetcode/easy/9. Palindrome Number
difficulty: easy
URL: https://leetcode.com/problems/palindrome-number

<br><br><br><br>

## Approach

<br>

### en
convert to string and compare with inversed string

<br>

### kr
문자열로 변환한후 뒤집힌 문자열과 일치하는지 확인합니다.

<br>
## Solution

 */


/**
 * @param {number} x
 * @return {boolean}
 */

const isPalindrome = (x) => String(x) === [...String(x)].reverse().join('');

// test
isPalindrome(121); //?
isPalindrome(-121); //?
isPalindrome(10); //?
isPalindrome(-101); //?
