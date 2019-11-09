"""
https://leetcode.com/problems/count-primes
Runtime: 2440 ms, faster than 5.03% of Python3 online submissions for Count Primes.
Memory Usage: 25.5 MB, less than 79.31% of Python3 online submissions for Count Primes.
"""


class Solution:
    def countPrimes(self, n: int) -> int:
        if n < 3:
            return 0

        primes = [1] * n
        for i in range(2, int(math.sqrt(n)) + 1):
            j = 2
            while i * j < n:
                primes[i * j] = 0
                j += 1

        return sum(primes) - 2
