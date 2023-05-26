/*
1539-kth-missing-positive-number
leetcode/easy/1539. Kth Missing Positive Number
Difficulty: easy
URL: https://leetcode.com/problems/kth-missing-positive-number/

NOTE: Description

NOTE: Constraints
  - 1 <= arr.length <= 1000
  - 1 <= arr[i] <= 1000
  - 1 <= k <= 1000
  - arr[i] < arr[j] for 1 <= i < j <= arr.length

NOTE: Explanation
*/

function findKthPositive(arr: number[], k: number): number {
  const missingNumbers = [];
  let i = 1;

  while (missingNumbers.length < k) {
    if (i !== arr[0]) {
      missingNumbers.push(i);

      if (missingNumbers.length === k) {
        return i;
      }
    } else {
      arr.shift();
    }

    i += 1;
  }
}

// Example 1:
//
let arr = [2, 3, 4, 7, 11];
let k = 5;
console.log(findKthPositive(arr, k));
// Output: 9
// Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
// Example 2:
//
arr = [1, 2, 3, 4];
k = 2;
console.log(findKthPositive(arr, k));
// Output: 6
// Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.
