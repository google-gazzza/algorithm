'''
https://leetcode.com/problems/fizz-buzz/
Runtime: 36 ms, faster than 93.90% of Python3 online submissions for Fizz Buzz.
Memory Usage: 13.8 MB, less than 100.00% of Python3 online submissions for Fizz Buzz.
'''

class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        res = []
        
        for x in range(1, n+1):
            if x % 15 == 0:
                res.append("FizzBuzz")
            elif x % 5 == 0:
                res.append("Buzz")
            elif x % 3 == 0:
                res.append("Fizz")
            else:
                res.append(str(x))
                
        return res