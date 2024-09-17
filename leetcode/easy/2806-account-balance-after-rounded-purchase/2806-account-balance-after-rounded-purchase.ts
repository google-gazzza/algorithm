// leetcode/easy/2806. Account Balance After Rounded Purchase
// 2806-account-balance-after-rounded-purchase
// URL: https://leetcode.com/problems/account-balance-after-rounded-purchase/description/

function accountBalanceAfterPurchase(purchaseAmount: number): number {
  if (purchaseAmount % 10 < 5) {
    purchaseAmount = purchaseAmount - (purchaseAmount % 10);
  } else {
    purchaseAmount = purchaseAmount + (10 - (purchaseAmount % 10));
  }

  return 100 - purchaseAmount;
}

let purchaseAmount = 9;
console.log(accountBalanceAfterPurchase(purchaseAmount));
// Output: 90

purchaseAmount = 15;
console.log(accountBalanceAfterPurchase(purchaseAmount));
// Output: 80
