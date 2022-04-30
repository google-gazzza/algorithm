/*
1360-number-of-days-between-two-dates
leetcode/easy/1360. Number of Days Between Two Dates
URL: https://leetcode.com/problems/number-of-days-between-two-dates/
NOTE: Description

NOTE: Constraints
  - The given dates are valid dates between the years 1971 and 2100.

NOTE: Explanation
*/

function daysBetweenDates(date1: string, date2: string): number {
  return Math.abs(new Date(date1).getTime() - new Date(date2).getTime()) / (3600000 * 24);
}


let date1 = '2019-06-29';
let date2 = '2019-06-30';
console.log(daysBetweenDates(date1, date2));
// Output: 1

date1 = '2020-01-15';
date2 = '2019-12-31';
console.log(daysBetweenDates(date1, date2));
// Output: 15
