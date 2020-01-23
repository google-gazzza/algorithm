"""
https://leetcode.com/problems/group-anagrams/
Runtime: 88 ms, faster than 99.54% of Python3 online submissions for Group Anagrams.
Memory Usage: 15.6 MB, less than 96.23% of Python3 online submissions for Group Anagrams.
"""


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:

        anagrams = {}

        for s in strs:
            key = ''.join(sorted(s))
            if key in anagrams.keys():
                anagrams[key].append(s)
            else:
                anagrams[key] = [s]

        results = []
        for key in anagrams.keys():
            results.append(anagrams[key])

        return results
