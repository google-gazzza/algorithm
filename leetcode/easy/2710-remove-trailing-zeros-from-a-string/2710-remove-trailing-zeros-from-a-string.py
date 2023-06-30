# leetcode/easy/2710. Remove Trailing Zeros From a String
# 2710-remove-trailing-zeros-from-a-string
# URL: https://leetcode.com/problems/remove-trailing-zeros-from-a-string/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference

class Solution:
    def removeTrailingZeros(self, num: str) -> str:
        for i in range(len(num) - 1, -1, -1):
            if num[i] != '0':
                return num[:i + 1]

        return num


num = "51230100"
print(Solution().removeTrailingZeros(num))
# Output: "512301"

num = "123"
print(Solution().removeTrailingZeros(num))
# Output: "123"

num = "50"
print(Solution().removeTrailingZeros(num))
