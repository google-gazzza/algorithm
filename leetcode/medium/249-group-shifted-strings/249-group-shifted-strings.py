from typing import List


class Solution:
    def getSequence(self, s: str) -> str:
        if not s:
            return ''

        if len(s) == 1:
            return '?'

        res = []

        for i in range(1, len(s)):
            diff = ord(s[i]) - ord(s[i - 1])

            if diff < 0:
                diff += 26

            res.append(str(diff))

        return ','.join(res)

    def groupStrings(self, strings: List[str]) -> List[List[str]]:
        dict = {}

        for s in strings:
            seq = self.getSequence(s)

            if seq not in dict:
                dict[seq] = []

            dict[seq].append(s)

        return list(dict.values())
