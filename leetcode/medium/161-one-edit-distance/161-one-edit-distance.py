
class Solution:
    def isOneEditDistance(self, s: str, t: str) -> bool:
        if s == t:
            return False

        if len(t) > len(s):
            s, t = t, s

        for i in range(len(s)):
            if i < len(t) and s[i] != t[i]:
                if (len(s) == len(t)):
                    return s[i + 1:] == t[i + 1:]

                return s[i + 1:] == t[i:]

            if i > len(t):
                return False

        return True
