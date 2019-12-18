"""https://leetcode.com/problems/group-anagrams/

Runtime: 100 ms, faster than 90.19% of Python3 online submissions for Group Anagrams.
Memory Usage: 16.1 MB, less than 58.49% of Python3 online submissions for Group Anagrams.
"""
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        result = collections.defaultdict(list)
        for str in strs:
            key = ''.join(sorted(str))
            result[key].append(str)

        return result.values()
