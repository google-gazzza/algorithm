// leetcode/easy/2591. Distribute Money to Maximum Children
// 2591-distribute-money-to-maximum-children
// URL: https://leetcode.com/problems/distribute-money-to-maximum-children/description/


function distMoney(money: number, children: number): number {
  const afterMoney = money - children;
  let quotient = Math.floor(afterMoney / 7);
  let dividend = Math.floor(afterMoney % 7);

  if (afterMoney < 0) {
    return -1;
  }

  if (quotient === 0) {
    return 0;
  }

  if (quotient < children) {
    if (quotient === children - 1 && dividend === 3) {
      return quotient - 1;
    }

    return quotient;
  }

  if (quotient == children && dividend === 0) {
    return quotient;
  }

  return children - 1;
}

let money = 20;
let children = 3;
// console.log(distMoney(money, children));
// Output: 1

money = 16;
children = 2;
// console.log(distMoney(money, children));
// Output: 1

money = 1;
children = 2;
// console.log(distMoney(money, children));

money = 8;
children = 2;
// console.log(distMoney(money, children));

money = 13;
children = 3;
// console.log(distMoney(money, children));

money = 17;
children = 2;
// console.log(distMoney(money, children));

money = 23;
children = 2;
console.log(distMoney(money, children));



