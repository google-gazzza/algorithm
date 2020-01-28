"""
https://leetcode.com/problems/triangle/
Runtime: 60 ms, faster than 60.70% of Python3 online submissions for Triangle.
Memory Usage: 13.8 MB, less than 20.00% of Python3 online submissions for Triangle.
"""


class Solution:
    def minimumTotal(self, triangle: List[List[int]]) -> int:
        dp = []
        for i in range(len(triangle)):
            temp = []
            for j in range(len(triangle[i])):
                if i == 0 and j == 0:
                    temp.append(triangle[i][j])
                elif j == 0:
                    temp.append(triangle[i][j] + dp[-1][j])
                elif j == len(triangle[i]) - 1:
                    temp.append(triangle[i][j] + dp[-1][j - 1])
                else:
                    temp.append(min(triangle[i][j] + dp[-1][j - 1], triangle[i][j] + dp[-1][j]))
            dp.append(temp)
        return min(dp[-1])