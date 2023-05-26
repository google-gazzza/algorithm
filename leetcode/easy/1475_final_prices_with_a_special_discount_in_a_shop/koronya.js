// [Easy] 1475. Final Prices With a Special Discount in a Shop
// 1475_final_prices_with_a_special_discount_in_a_shop

// https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop
// Runtime: 84 ms, faster than 72.97% of JavaScript online submissions for Final Prices With a Special Discount in a Shop.
// Memory Usage: 40.4 MB, less than 13.06% of JavaScript online submissions for Final Prices With a Special Discount in a Shop.
const finalPrices = prices => {
  const pricesLen = prices.length
  const getDiscountPrice = (item, index) => {
    for (let i = index + 1; i < pricesLen; i = i + 1 | 0) {
      if (item >= prices[i]) {
        return prices[i]
      }
    }
    return 0
  }
  return prices.map((item, index) => item - getDiscountPrice(item, index))
}
