# 397-integer-replacement
# leetcode/medium/397. Integer Replacement
# URL: https://leetcode.com/problems/integer-replacement/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference

class Solution:
    def integerReplacement(self, n: int) -> int:
        count = 0

        while n > 1:
            if n % 2 == 0:
                n = n // 2
            else:
                if n == 3 or n % 4 == 1:
                    n -= 1
                else:
                    n += 1

            count += 1

        return count


n = 8
print(Solution().integerReplacement(n))
# Output: 3

n = 7
print(Solution().integerReplacement(n))
# Output: 4

n = 4
print(Solution().integerReplacement(n))
# Output: 2

n = 65535
print(Solution().integerReplacement(n))
## 17