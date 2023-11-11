// leetcode/medium/2043. Simple Bank System
// 2043-simple-bank-system
// URL: https://leetcode.com/problems/simple-bank-system/description/

class Bank {
  private accountMap = new Map<number, number>();

  constructor(balance: number[]) {
    balance.forEach((_balance, index) => {
      this.accountMap.set(index + 1, _balance);
    });
  }

  isValidAccount(account: number): boolean {
    return this.accountMap.has(account);
  }

  hasEnoughMoneyForWithdraw(account: number, money: number): boolean {
    const balance = this.accountMap.get(account);

    return balance >= money;
  }

  transfer(account1: number, account2: number, money: number): boolean {
    if (!this.hasEnoughMoneyForWithdraw(account1, money)) {
      return false;
    }

    if (!this.isValidAccount(account2)) {
      return false;
    }

    this.accountMap.set(account1, this.accountMap.get(account1) - money);
    this.accountMap.set(account2, this.accountMap.get(account2) + money);

    return true;
  }

  deposit(account: number, money: number): boolean {
    if (!this.isValidAccount(account)) {
      return false;
    }

    this.accountMap.set(account, this.accountMap.get(account) + money);

    return true;
  }

  withdraw(account: number, money: number): boolean {
    if (!this.isValidAccount(account)) {
      return false;
    }

    if (!this.hasEnoughMoneyForWithdraw(account, money)) {
      return false;
    }

    this.accountMap.set(account, this.accountMap.get(account) - money);

    return true;
  }
}

/**
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */
