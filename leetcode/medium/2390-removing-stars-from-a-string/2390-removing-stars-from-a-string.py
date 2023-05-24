# leetcode/medium/2390. Removing Stars From a String
# 2390-removing-stars-from-a-string
# URL: https://leetcode.com/problems/removing-stars-from-a-string/description/?envType=study-plan-v2&id=leetcode-75
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference



class Solution:
    def removeStars(self, s: str) -> str:
        while s.find('*') != -1:
            index = s.index('*')
            s = s[:index - 1] + s[index + 1:]

        return s


s = "leet**cod*e"
print(Solution().removeStars(s))
# Output: "lecoe"

s = "erase*****"
print(Solution().removeStars(s))
# Output: ""
