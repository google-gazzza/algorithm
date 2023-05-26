"""
https://leetcode.com/problems/reorder-data-in-log-files/
Runtime: 64 ms, faster than 26.11% of Python3 online submissions for Reorder Data in Log Files.
Memory Usage: 14.1 MB, less than 39.25% of Python3 online submissions for Reorder Data in Log Files.
"""
class Solution:
    def reorderLogFiles(self, logs: List[str]) -> List[str]:
        letters = []
        digits = []

        for log in logs:
            if log.split()[1].isdigit():
                digits.append(log)
            else:
                letters.append(log)

        letters.sort(key=lambda x: (x.split(' ')[1:], x.split(' ')[0]))

        return letters + digits
