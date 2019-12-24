"""
https://leetcode.com/problems/divide-two-integers/
Runtime: 32 ms, faster than 78.44% of Python3 online submissions for Divide Two Integers.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Divide Two Integers.
"""


class Solution:
    def divide(self, dividend: int, divisor: int) -> int:
        
        if dividend == -2147483648 and divisor == -1:
            return 2147483647
        
        if dividend * divisor >= 0:
            is_minus = False
        else:
            is_minus = True
            
        dividend = abs(dividend)
        divisor = abs(divisor)

        divisors = [divisor]
        counts = [1]
        while divisors[-1] < dividend:
            temp_divisors = 0
            temp_count = 0
            for i in range(10):
                temp_divisors += divisors[-1]
                temp_count += counts[-1]
            divisors.append(temp_divisors)
            counts.append(temp_count)

        result = 0
        for i in range(len(divisors)-1, -1, -1):
            while dividend >= divisors[i]:
                dividend -= divisors[i]
                result += counts[i]

        return -result if is_minus else result
