// leetcode/easy/2798. Number of Employees Who Met the Target
// 2798-number-of-employees-who-met-the-target
// URL: https://leetcode.com/problems/number-of-employees-who-met-the-target/description/

function numberOfEmployeesWhoMetTarget(hours: number[], target: number): number {
  return hours.filter((hour) => hour >= target).length;
}

let hours = [0, 1, 2, 3, 4];
let target = 2;
console.log(numberOfEmployeesWhoMetTarget(hours, target));
// Output: 3

hours = [5, 1, 4, 2, 2];
target = 6;
console.log(numberOfEmployeesWhoMetTarget(hours, target));
// Output: 0
