// [Medium] 1357. Apply Discount Every n Orders
// 1357_apply_discount_every_n_orders

// https://leetcode.com/problems/apply-discount-every-n-orders
// Runtime: 172 ms, faster than 100.00% of TypeScript online submissions for Apply Discount Every n Orders.
// Memory Usage: 49.5 MB, less than 28.57% of TypeScript online submissions for Apply Discount Every n Orders.

/**
 * @param {number} n
 * @param {number} discount
 * @param {number[]} products
 * @param {number[]} prices
 */
class Cashier {
  count: number
  n: number
  discount: number
  priceMap: Map<number, number>
  constructor(n: number, discount: number, products: number[], prices: number[]) {
    this.count = 0
    this.n = n
    this.priceMap = new Map<number, number>()
    products.forEach((product, index) => {
      this.priceMap.set(product, prices[index])
    })
    this.discount = discount
  }

  getBill(product: number[], amount: number[]): number {
    const sum = product.reduce((acc, cur, i) => acc + this.priceMap.get(cur) * amount[i], 0)
    this.count += 1
    return this.count % this.n === 0 ? sum * ((100 - this.discount) / 100) : sum
  }
}

/**
 * Your Cashier object will be instantiated and called as such:
 * var obj = new Cashier(n, discount, products, prices)
 * var param_1 = obj.getBill(product,amount)
 */

// const obj = new Cashier(3, 50, [1, 2, 3, 4, 5, 6, 7], [100, 200, 300, 400, 300, 200, 100])
// obj.getBill([1, 2], [1, 2]) //?
// obj.getBill([3, 7], [10, 10]) //?
// obj.getBill([1, 2, 3, 4, 5, 6, 7], [1, 1, 1, 1, 1, 1, 1]) //?

// obj.getBill([4], [10]) //?
// obj.getBill([7, 3], [10, 10]) //?
// obj.getBill([7, 5, 3, 1, 6, 4, 2], [10, 10, 10, 9, 9, 9, 7]) //?
// obj.getBill([2, 3, 5], [5, 3, 2]) //?
