/*
2303-calculate-amount-paid-in-taxes
leetcode/easy/2303. Calculate Amount Paid in Taxes
URL: https://leetcode.com/problems/calculate-amount-paid-in-taxes/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function calculateTax(brackets: number[][], income: number): number {
  let tax = 0;
  let band = 0;

  brackets.forEach(([bracket, taxRate]) => {
    let target = 0;
    if ((income + band) >= bracket) {
      target = bracket - band;
    } else {
      target = income;
    }
    tax += target * (taxRate / 100);
    income -= target;
    band += target;
  });

  return tax;
}

let brackets = [[3, 50], [7, 10], [12, 25]];
let income = 10;
console.log(calculateTax(brackets, income));
// Output: 2.65000

brackets = [[1, 0], [4, 25], [5, 50]];
income = 2;
console.log(calculateTax(brackets, income));
// Output: 0.25000

brackets = [[2, 50]];
income = 0;
console.log(calculateTax(brackets, income));
// Output: 0.00000

brackets = [[2, 7], [3, 17], [4, 37], [7, 6], [9, 83], [16, 67], [19, 29]];
income = 18;
console.log(calculateTax(brackets, income));
// 7.79
