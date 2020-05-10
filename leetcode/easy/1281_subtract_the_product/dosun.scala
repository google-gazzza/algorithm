/**
  * https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
  *
  * Runtime: 400 ms, faster than 35.85% of Scala online submissions for Subtract the Product and Sum of Digits of an Integer.
  * Memory Usage: 50.6 MB, less than 100.00% of Scala online submissions for Subtract the Product and Sum of Digits of an Integer.
  */
  object Solution {
    def subtractProductAndSum(n: Int): Int = {
        val numbers = n.toString.map(_.asDigit).toList
        val product = numbers.foldLeft(1)((m: Int, n: Int) => m * n)
        val sum     = numbers.foldLeft(0)((m: Int, n: Int) => m + n)
        product - sum
    }
}
