/*
the-coupon-code

# codewars/7kyu/The Coupon Code
Difficulty: 7kyu
URL: https://www.codewars.com/kata/539de388a540db7fec000642
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return (enteredCode === correctCode) && (new Date(currentDate) <= new Date(expirationDate));
}

// test
console.log(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014'), true);
console.log(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014'), false);
