/*
# leetcode/easy/860. Lemonade Change
# 860-lemonade-change
# URL: https://leetcode.com/problems/lemonade-change/description/?envType=study-plan-v2&id=programming-skills

NOTE: Description
NOTE: Constraints
NOTE: Explanatin
NOTE: Reference

*/

function lemonadeChange(bills: number[]): boolean {
  const cashMap = {
    5: 0,
    10: 0,
    20: 0,
  };

  for (let i = 0; i < bills.length; i += 1) {
    if (bills[i] === 5) {
      cashMap[5] += 1;
    }

    if (bills[i] === 10) {
      cashMap[10] += 1;
      cashMap[5] -= 1;
    }

    if (bills[i] === 20) {
      cashMap[20] += 1;

      if (cashMap[10] > 0) {
        cashMap[10] -= 1;
        cashMap[5] -= 1;
      } else {
        cashMap[5] -= 3;
      }
    }

    if (cashMap[5] < 0) {
      return false;
    }
  }

  return true;
}

let bills = [5, 5, 5, 10, 20];
lemonadeChange(bills);
// Output: true

bills = [5, 5, 10, 10, 20];
console.log(lemonadeChange(bills));
// Output: false
