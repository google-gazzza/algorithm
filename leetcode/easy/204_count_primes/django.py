"""
https://leetcode.com/problems/count-primes/
Runtime: 400 ms, faster than 74.14% of Python3 online submissions for Count Primes.
Memory Usage: 24.3 MB, less than 100.00% of Python3 online submissions for Count Primes.
"""

class Solution:
    def countPrimes(self, n: int) -> int:
        """
        time limit exceeded
        primes = []

        for i in range(2, n):

            isPrime = True

            for prime in primes:
                if i % prime == 0:
                    isPrime = False
                    break

            if isPrime:
                primes.append(i)

        return len(primes)
        """

        if n < 2:
            return 0

        primes = [1] * n

        primes[0] = 0
        primes[1] = 0

        for i in range(2, int(n ** 0.5) + 1):
            if primes[i] != 0:
                for j in range(i*i, n, i):
                    primes[j] = 0

        return sum(primes)

