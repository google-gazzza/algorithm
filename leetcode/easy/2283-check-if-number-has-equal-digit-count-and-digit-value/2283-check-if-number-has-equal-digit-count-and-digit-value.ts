/*
2283-check-if-number-has-equal-digit-count-and-digit-value
leetcode/easy/2283. Check if Number Has Equal Digit Count and Digit Value
URL: https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function digitCount(num: string): boolean {
  const countMap: Map<string, number> = new Map();

  for (let i = 0; i < num.length; i += 1) {
    const digit = num[i];
    const count = countMap.get(digit) || 0;
    countMap.set(digit, count + 1);
  }

  return num.split('')
    .every((e, i) => {
      countMap.get(String(i));
      const count = countMap.get(String(i)) || 0;
      return count === Number(e);
    });
}

let num = '1210';
console.log(digitCount(num));
// Output: true
// Explanation:
//   num[0] = '1'. The digit 0 occurs once in num.
//   num[1] = '2'. The digit 1 occurs twice in num.
//   num[2] = '1'. The digit 2 occurs once in num.
//   num[3] = '0'. The digit 3 occurs zero times in num.
//   The condition holds true for every index in "1210", so return true.
//   Example 2:

num = '030';
console.log(digitCount(num));
// Output: false
// Explanation:
//   num[0] = '0'. The digit 0 should occur zero times, but actually occurs twice in num.
//   num[1] = '3'. The digit 1 should occur three times, but actually occurs zero times in num.
//   num[2] = '0'. The digit 2 occurs zero times in num.
//   The indices 0 and 1 both violate the condition, so return false.
