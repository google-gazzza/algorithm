"""
https://leetcode.com/problems/fibonacci-number/

Runtime: 28 ms, faster than 69.12% of Python3 online submissions for Fibonacci Number.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Fibonacci Number.
"""
class Solution:
    def fib(self, N: int) -> int:
        memo = [None] * (N + 1)
        def dp(n):
            if memo[n] is not None:
                return memo[n]
            memo[n] = n if n < 2 else dp(n - 1) + dp(n - 2)
            return memo[n]
        return dp(N)


"""
빌트인 모듈 functools의 lru_cache 데코레이터 사용 
memorization과 시간 및 공간 사용 비슷함

Runtime: 24 ms, faster than 88.39% of Python3 online submissions for Fibonacci Number.
Memory Usage: 13 MB, less than 97.10% of Python3 online submissions for Fibonacci Number.
"""
import functools

class Solution:
    @functools.lru_cache(maxsize=None) #128 by default
    def fib(self, N: int) -> int:
        if N < 2:
            return N
        else:
            return self.fib(N-1) + self.fib(N-2)
