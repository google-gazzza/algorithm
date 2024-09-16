

class Solution {
    fun isOneEditDistance(s: String, t: String): Boolean {
        if (s == t) {
            return false
        }

        if (s.length < t.length) {
            return isOneEditDistance(t, s)
        }

        for (i in 0 until s.length) {
            if (i >= t.length) {
                if (i + 1 == s.length) {
                    return true
                }
                return false
            }

            if (s[i] != t[i]) {
                if (s.length == t.length) {
                    return s.substring(i + 1) == t.substring(i + 1)
                } else {
                    return s.substring(i + 1) == t.substring(i)
                }
            }
        }

        return true
    }
}
