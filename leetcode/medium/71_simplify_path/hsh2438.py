"""
https://leetcode.com/problems/simplify-path/
Runtime: 24 ms, faster than 94.76% of Python3 online submissions for Simplify Path.
Memory Usage: 12.6 MB, less than 100.00% of Python3 online submissions for Simplify Path.
"""


class Solution:
    def simplifyPath(self, path: str) -> str:
        new_directories = []
        directories = path.split('/')
        for directory in directories:
            if directory == '.':
                continue
            elif directory == '..':
                if len(new_directories) > 0:
                    new_directories.pop()
            elif len(directory) > 0:
                new_directories.append(directory)
        return '/'+'/'.join(new_directories) if len(new_directories) > 0 else '/'
