/** https://leetcode.com/problems/count-primes/
  * 
  * Count the number of prime numbers less than a non-negative number, n.
  * 
  * Example:
  * 
  * Input: 10
  * Output: 4
  * Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
  * 
  * testcase 중 input=2 / expect=0 인 버그가 있어서 해당 문제느 코드만 올려놓습니다.
  */

import scala.collection.mutable.ListBuffer

object Solution {
    def isPrime(n: Int): Boolean = {
        if (n <= 1) return false
        else if (n == 2) return true
        else (2 until n).forall(n % _ != 0)
    }

    def countPrimes(n: Int): Int = {
        val primeNumbers = new ListBuffer[Int]()
        (1 to n).foreach(i => if (isPrime(i)) primeNumbers += 1)
        return primeNumbers.length
    }
}
