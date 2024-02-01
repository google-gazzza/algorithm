'''
https://leetcode.com/problems/reverse-vowels-of-a-string/
Runtime: 68 ms, faster than 34.51% of Python3 online submissions for Reverse Vowels of a String.
Memory Usage: 15.9 MB, less than 6.67% of Python3 online submissions for Reverse Vowels of a String.
'''

class Solution:
    def reverseVowels(self, s: str) -> str:
          
        vowles = ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U')
        vlist = []
        ilist = []
        nlist = []
        
        for i in range(len(s)):
            nlist.append(s[i])
            if s[i] in vowles:
                ilist.append(i)
                vlist.append(s[i])
                
        vlist = vlist[::-1]

        for i in range(len(ilist)):
            nlist[ilist[i]] = vlist[i]

        return ''.join(nlist)
            