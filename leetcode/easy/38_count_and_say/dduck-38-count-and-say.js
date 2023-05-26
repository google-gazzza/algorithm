/*
38-count-and-say

# leetcode/easy/38. Count and Say
difficulty: easy
URL: https://leetcode.com/problems/count-and-say/
tags: recursion

## Approach

### en
the key is to find the same consecutive number(or character)

Induction = P(n) = numberCount(P(n-1))
Base induction P(1) => '1'
Inductive step:
P(2) => numberCount(P(1)) = one 1  = "11"
P(3) => numberCount(P(2)) = two 1 = "21"
P(4) => numberCount(P(3)) = one 2, one 1 = "1211"

### kr
핵심 키는 연속된 숫자(혹은 문자)를 찾는 것 입니다.

Induction = P(n) = numberCount(P(n-1))
Base induction P(1) => '1'
Inductive step:
P(2) => numberCount(P(1)) = one 1  = "11"
P(3) => numberCount(P(2)) = two 1 = "21"
P(4) => numberCount(P(3)) = one 2, one 1 = "1211"

## solution
### JavaScript

*/

/**
 * @param {number} n
 * @return {string}
 */

const count = (input) => {
  const result = [];
  const array = input.slice();
  
  while (array.length) {
    const targetNumber = array[0];
    
    for (let i = 1; i <= array.length; i += 1) {
      if (array[i] !== targetNumber) {
        result.push(`${i}${targetNumber}`);
        array.splice(0, i);
        break;
      }
    }
  }
  
  return [...(result.join(''))];
};

const countAndSay = function (n, numbers = [1]) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return numbers.join('');
  }
  
  return countAndSay(n - 1, count(numbers));
};

// test
console.log(countAndSay(1)); // 1
console.log(countAndSay(4)); // 1211
