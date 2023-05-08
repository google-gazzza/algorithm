# leetcode/easy/2652. Sum Multiples
# 2652-sum-multiples
# URL: https://leetcode.com/problems/sum-multiples/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference

class Solution:
    def sumOfMultiples(self, n: int) -> int:
        sumation = 0

        for i in range(1, n + 1):
            if i % 3 == 0 or i % 5 == 0 or i % 7 == 0:
                sumation += i

        return sumation


n = 7
print(Solution().sumOfMultiples(n))
# Output: 21


n = 10
print(Solution().sumOfMultiples(n))
# Output: 40


n = 9
print(Solution().sumOfMultiples(n))
# Output: 30
