"""
https://leetcode.com/problems/restore-ip-addresses/
Runtime: 36 ms, faster than 49.17% of Python3 online submissions for Restore IP Addresses.
Memory Usage: 13.9 MB, less than 5.56% of Python3 online submissions for Restore IP Addresses.
"""


class Solution:
    def restoreIpAddresses(self, s: str) -> List[str]:
        
        result = []
        
        def recursive(s, ip):
            check_len = ip.strip('.').split('.')
            if len(check_len) > 3 or len(s) == 0:
                return
            elif len(check_len) == 3:
                if int(s) < 256 and str(int(s)) == s:
                    result.append(ip+s)
            else:
                for i in range(1, 4):
                    check_num = s[:i]
                    if int(check_num) < 256 and str(int(check_num)) == check_num:
                        recursive(s[i:], ip+s[:i]+'.')

        
        recursive(s, '')
        
        return result
                              
