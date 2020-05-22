'''
https://leetcode.com/problems/string-compression/
Runtime: 56 ms, faster than 77.34% of Python3 online submissions for String Compression.
Memory Usage: 12.6 MB, less than 100.00% of Python3 online submissions for String Compression.
'''

class Solution:
    def compress(self, chars: List[str]) -> int:
        
        new_i = 0
        cur = chars[0]
        count = 0
        
        for i in range(len(chars)):
            if chars[i] == cur:
                count += 1
            else:
                if count == 1:
                    chars[new_i] = cur
                    new_i += 1
                    count = 1
                else:
                    chars[new_i] = cur
                    str_count = str(count)
                    for j in range(len(str_count)):
                        new_i += 1
                        chars[new_i] = str_count[j]
                    new_i += 1
                    count = 1
                
                cur = chars[i]

        
        if count == 1:
            chars[new_i] = cur
        else:
            chars[new_i] = cur
            str_count = str(count)
            for j in range(len(str_count)):
                new_i += 1
                chars[new_i] = str_count[j]
                
        return new_i + 1