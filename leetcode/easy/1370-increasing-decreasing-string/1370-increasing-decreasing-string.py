"""
1370-increasing-decreasing-string
leetcode/easy/1370. Increasing Decreasing String
Difficulty: easy
URL: https://leetcode.com/problems/increasing-decreasing-string/
"""

class Solution:
    def sortString(self, s: str) -> str:
        s = sorted(s)
        result = []
        delete_list = []

        while len(s):
            temp = [s.pop(0)]

            for item in s:
                print(item)
                if temp[-1] < item:
                    temp.append(item)
                    delete_list.append(item)

            result.extend(temp)

            for item in delete_list:
                s.remove(item)
            delete_list = []

            if not len(s):
                continue

            temp = [s.pop(-1)]

            for item in s[::-1]:
                if temp[-1] > item:
                    temp.append(item)
                    delete_list.append(item)

            result.extend(temp)

            for item in delete_list:
                s.remove(item)
            delete_list = []

        return ''.join(result)



class Solution:
    def sortString(self, s: str) -> str:
        s = list(s)
        result = ''
        while s:
            for letter in sorted(set(s)):
                s.remove(letter)
                result += letter
            for letter in sorted(set(s), reverse=True):
                s.remove(letter)
                result += letter
        return result



def test():
    s = "aaaabbbbcccc"
    output = "abccbaabccba"
    assert Solution().sortString(s) == output

    s = "rat"
    output = "art"
    assert Solution().sortString(s) == output

    s = "leetcode"
    output = "cdelotee"
    assert Solution().sortString(s) == output

    s = "ggggggg"
    output = "ggggggg"
    assert Solution().sortString(s) == output

    s = "spo"
    output = "ops"
    assert Solution().sortString(s) == output
