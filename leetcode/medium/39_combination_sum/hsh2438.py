"""
https://leetcode.com/problems/combination-sum/
Runtime: 296 ms, faster than 8.34% of Python3 online submissions for Combination Sum.
Memory Usage: 20.1 MB, less than 6.06% of Python3 online submissions for Combination Sum.
"""


class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:

        candidates.sort(reverse=True)

        result = []
        cases = [[target, []]]
        while bool(cases):
            new_cases = []
            for case in cases:
                for candi in candidates:
                    if candi <= case[0]:
                        temp = copy.copy(case[1])
                        temp.append(candi)
                        if case[0] == candi:
                            result.append(temp)
                        else:
                            new_cases.append([case[0]-candi, temp])

            cases = new_cases

        return set(tuple(sorted(li)) for li in result)
