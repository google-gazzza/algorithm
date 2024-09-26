/*
leap-years

# codewars/7kyu/Leap Years
Difficulty: 7kyu
URL: https://www.codewars.com/kata/526c7363236867513f0005ca
tags: math

## Approach

### en
1.check divisibility 400
2.check divisibility 100
3.check divisibility 4

### kr
1.divisibility 400을 확인합니다.
2.divisibility 100을 확인합니다.
3.divisibility 4을 확인합니다.

## Solution
### JavaScript

*/

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  
  return year % 4 === 0;
}

// test
console.log(isLeapYear(1234), false, 'Year 1234');
console.log(isLeapYear(1984), true, 'Year 1984');
console.log(isLeapYear(2000), true, 'Year 2000');
console.log(isLeapYear(2010), false, 'Year 2010');
console.log(isLeapYear(2013), false, 'Year 2013');
