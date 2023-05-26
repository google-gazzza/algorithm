/*
374-guess-number-higher-or-lower
leetcode/easy/374. Guess Number Higher or Lower
Difficulty: easy
URL: https://leetcode.com/problems/guess-number-higher-or-lower/
*/


/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return              -1 if num is lower than the guess number
 *                   1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

 let pick = 0;

 function guess(num) {
   if (num === pick) {
     return 0;
   } else if (num > pick) {
     return -1;
   } else {
     return 1;
   }
 }
 
 function guessNumber(n: number): number {
   let left = 0;
   let right = n;
   let middle;
 
   while (true) {
     middle = (left + right) / 2;
     let guessResult = guess(middle);
 
     if (guessResult === 0) {
       return middle;
     }
 
     if (guessResult === -1) {
       right = middle;
     } else {
       left = middle;
     }
   }
 };
 
 
 // Example 1:
 //
 let n = 10;
 pick = 6;
 console.log(guessNumber(n));
 // Output: 6
 // Example 2:
 //
 n = 1;
 pick = 1;
 console.log(guessNumber(n));
 // Output: 1
 // Example 3:
 //
 n = 2;
 pick = 1;
 console.log(guessNumber(n));
 // Output: 1
 
 