// [Easy] 1281. Subtract the Product and Sum of Digits of an Integer
// 1281_subtract_the_product_and_sum_of_digits_of_an_integer

// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer
// Runtime: 64 ms, faster than 95.68% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.
// Memory Usage: 37 MB, less than 8.36% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.
const subtractProductAndSum = n => {
  const arrN = n.toString().split('').map(str => Number(str))
  return arrN.reduce((acc, cur) => acc * cur, 1) - arrN.reduce((acc, cur) => acc + cur, 0)
}
