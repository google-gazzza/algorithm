"""
https://leetcode.com/problems/unique-email-addresses/
Runtime: 56 ms, faster than 47.16% of Python3 online submissions for Unique Email Addresses.
Memory Usage: 14.1 MB, less than 11.04% of Python3 online submissions for Unique Email Addresses.
"""


class Solution:
    def numUniqueEmails(self, emails: List[str]) -> int:
        result = set()
        for email in emails:
            position_at = email.find('@')
            local_name = email[:position_at]
            position_plus = local_name.find('+')
            if position_plus > -1:
                local_name = local_name[:position_plus]
            result.add(local_name.replace('.', '') + email[position_at:])
        
        return len(result)
