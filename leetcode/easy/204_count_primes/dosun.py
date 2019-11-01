"""https://leetcode.com/problems/count-primes/

Runtime: 428 ms, faster than 71.10% of Python3 online submissions for Count Primes.
Memory Usage: 25.4 MB, less than 79.31% of Python3 online submissions for Count Primes.
"""

import math 

class Solution:
    def countPrimes(self, n: int) -> int:
        if n <= 2: return 0
        primes = [True] * n
        primes[0] = primes[1] = False
        for i in range(2, int(math.sqrt(n)) + 1):
            if primes[i]:
                for j in range(i*2, n, i):
                    primes[j] = False

        return sum(primes)
