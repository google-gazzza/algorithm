"""
https://leetcode.com/problems/defanging-an-ip-address/
Runtime: 28 ms, faster than 56.92% of Python3 online submissions for Defanging an IP Address.
Memory Usage: 13 MB, less than 100.00% of Python3 online submissions for Defanging an IP Address.
"""


class Solution:
    def defangIPaddr(self, address: str) -> str:
        return address.replace('.', '[.]')
