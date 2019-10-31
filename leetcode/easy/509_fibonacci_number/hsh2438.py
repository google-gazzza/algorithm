"""
https://leetcode.com/problems/fibonacci-number/
Runtime: 992 ms, faster than 25.09% of Python3 online submissions for Fibonacci Number.
Memory Usage: 13.8 MB, less than 5.80% of Python3 online submissions for Fibonacci Number.
"""
class Solution:
    def fib(self, N: int) -> int:
        def fibonacci(n):
            if n == 0:
                return 0
            elif n == 1:
                return 1
            else:
                return fibonacci(n - 1) + fibonacci(n - 2)

        return fibonacci(N)