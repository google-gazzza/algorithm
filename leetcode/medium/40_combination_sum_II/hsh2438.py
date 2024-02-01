"""
https://leetcode.com/problems/combination-sum-ii/
Runtime: 176 ms, faster than 20.82% of Python3 online submissions for Combination Sum II.
Memory Usage: 14.3 MB, less than 6.52% of Python3 online submissions for Combination Sum II.
"""


class Solution:
    def combinationSum2(self, candidates_list: List[int], target: int) -> List[List[int]]:
        results = []

        def recursive(candidates, current, target):
            if len(candidates) == 0 or target < 0:
                return

            new_current = copy.copy(current)
            new_current.append(candidates[0])
            new_candidates = copy.copy(candidates)
            new_candidates.pop(0)

            if candidates[0] == target:
                results.append(new_current)
                recursive(new_candidates, current, target)
            elif candidates[0] < target:
                recursive(new_candidates, current, target)
                recursive(new_candidates, new_current, target-candidates[0])
            else:
                recursive(new_candidates, current, target)              
        
        candidates_list.sort(reverse=True)
        recursive(candidates_list, [], target)
    
        return set(tuple(sorted(li)) for li in results)
