# leetcode/easy/1056. Confusing Number
# 1056-confusing-number
# URL: https://leetcode.com/problems/confusing-number/description/?envType=study-plan-v2&id=programming-skills
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference

class Solution:
    def __init__(self):
        self.inverted = {0: 0, 1: 1, 6: 9, 8: 8, 9: 6}

    def confusingNumber(self, n: int) -> bool:
        strNum = list(str(n))[::-1]

        for i in range(len(strNum)):
            if int(strNum[i]) not in self.inverted:
                return False
            strNum[i] = str(self.inverted[int(strNum[i])])

        strNum = ''.join(strNum)

        return strNum != str(n)


n = 6
print(Solution().confusingNumber(n))
# Output: true

n = 89
print(Solution().confusingNumber(n))
# Output: true
n = 11
print(Solution().confusingNumber(n))
# Output: false
