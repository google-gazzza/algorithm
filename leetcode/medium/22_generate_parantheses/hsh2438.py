"""
https://leetcode.com/problems/generate-parentheses
Runtime: 48 ms, faster than 21.83% of Python3 online submissions for Generate Parentheses.
Memory Usage: 16 MB, less than 6.67% of Python3 online submissions for Generate Parentheses.
"""
class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        cases = {'(':1}
        for i in range(n*2-1):
            temp = {}
            for key in cases.keys():
                open = cases[key]
                if open == 0:
                    temp[key+'('] = 1
                elif open == n:
                    temp[key+')'] = open-1
                else:
                    temp[key+'('] = open+1
                    temp[key+')'] = open-1
            cases = temp

        return [key for key in cases.keys() if cases[key] == 0]
