/*
1491-average-salary-excluding-the-minimum-and-maximum-salary
leetcode/easy/1491. Average Salary Excluding the Minimum and Maximum Salary
URL: https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function average(salary: number[]): number {
  salary.sort((a, b) => a - b);
  salary.pop();
  salary.shift();

  return salary.slice(1, salary.length - 1)
    .reduce((a, b) => a + b) / salary.length;
};

let salary = [4000, 3000, 1000, 2000];
console.log(average(salary));
// Output: 2500.00000
// Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
//   Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500

salary = [1000, 2000, 3000];
console.log(average(salary));
// Output: 2000.00000
// Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
//   Average salary excluding minimum and maximum salary is (2000) / 1 = 2000
