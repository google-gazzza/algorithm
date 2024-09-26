# 2544-alternating-digit-sum
# leetcode/easy/2544. Alternating Digit Sum
# URL: https://leetcode.com/problems/alternating-digit-sum/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference

class Solution:
    def alternateDigitSum(self, n: int) -> int:
        char_list = list(str(n))

        total = 0

        for i in range(len(char_list)):
            if i % 2 == 0:
                total += int(char_list[i])
            else:
                total -= int(char_list[i])

        return total


n = 521
print(Solution().alternateDigitSum(n))
# Output: 4

n = 111
print(Solution().alternateDigitSum(n))
# Output: 1

n = 886996
print(Solution().alternateDigitSum(n))
# Output: 0
