"""
https://leetcode.com/problems/implement-trie-prefix-tree/
Runtime: 152 ms, faster than 77.53% of Python3 online submissions for Implement Trie (Prefix Tree).
Memory Usage: 27.2 MB, less than 66.67% of Python3 online submissions for Implement Trie (Prefix Tree).
"""


class Trie:
    def __init__(self):
        self.trie = {}

    def insert(self, word: str) -> None:
        dic = self.trie
        for ch in word:
            if not ch in dic.keys():
                dic[ch] = {'end':False}
            dic = dic[ch]
        dic['end'] = True

    def search(self, word: str) -> bool:
        dic = self.trie
        for ch in word:
            if ch in dic.keys():
                dic = dic[ch]
            else:
                return False
        return dic['end']

    def startsWith(self, prefix: str) -> bool:
        dic = self.trie
        for ch in prefix:
            if ch in dic.keys():
                dic = dic[ch]
            else:
                return False
        return True
