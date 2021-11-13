"""
49-group-anagrams
leetcode/medium/49. Group Anagrams
Difficulty: medium
URL: https://leetcode.com/problems/group-anagrams/
"""

from typing import List


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        _grouped_str = {}

        for _str in strs:
            key = str(sorted(tuple(_str)))
            if not key in _grouped_str:
                _grouped_str[key] = []

            _grouped_str[key].append(_str)

        return list(_grouped_str.values())


def test():
    strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
    output = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]
    assert Solution().groupAnagrams(strs) == output
    strs = [""]
    output = [[""]]
    assert Solution().groupAnagrams(strs) == output
    strs = ["a"]
    output = [["a"]]
    assert Solution().groupAnagrams(strs) == output
