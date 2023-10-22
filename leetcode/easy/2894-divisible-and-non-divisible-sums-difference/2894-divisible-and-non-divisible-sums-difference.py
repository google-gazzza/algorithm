# leetcode/easy/2894. Divisible and Non-divisible Sums Difference
# 2894-divisible-and-non-divisible-sums-difference
# URL: https://leetcode.com/problems/create-a-dataframe-from-list/description/

class Solution:
    def differenceOfSums(self, n: int, m: int) -> int:
        sum1 = 0
        sum2 = 0

        for i in range(1, n + 1):
            if i % m != 0:
                sum1 += i

            if i % m == 0:
                sum2 += i

        return sum1 - sum2
