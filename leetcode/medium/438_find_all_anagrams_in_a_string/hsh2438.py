"""
https://leetcode.com/problems/find-all-anagrams-in-a-string/
Runtime: 136 ms, faster than 73.39% of Python3 online submissions for Find All Anagrams in a String.
Memory Usage: 14.7 MB, less than 8.70% of Python3 online submissions for Find All Anagrams in a String.
"""


class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        
        def update_dic(dic, key, add):
            if key in dic.keys():
                if add:
                    dic[key] += 1
                else:
                    if dic[key] == 1:
                        del dic[key]
                    else:
                        dic[key] -= 1
            else:
                dic[key] = 1
                
        results = []
        
        source = {}
        target = {}
        
        len_p = len(p)
        
        if len(s) < len_p:
            return []
        
        for i in range(len_p):
            update_dic(source, s[i], True)
            update_dic(target, p[i], True)
        
        for i in range(len(s) - len_p):
            if source == target:
                results.append(i)
            update_dic(source, s[i], False)
            update_dic(source, s[i+len_p], True)
        
        if source == target:
            results.append(i+1)
        
        return results
                
                       
