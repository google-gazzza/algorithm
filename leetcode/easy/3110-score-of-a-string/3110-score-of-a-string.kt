// 3110-score-of-a-string
// URL: https://leetcode.com/problems/score-of-a-string/description/

import kotlin.math.abs

class Solution {
    fun getAsciiCode(c: Char): Int {
        return c.toInt()
    }

    fun scoreOfString(s: String): Int {
        var lastAsciiCode = getAsciiCode(s[0])
        var score = 0

        for (c in s) {
            val asciiCode = getAsciiCode(c)
            score += abs(asciiCode - lastAsciiCode)
            lastAsciiCode = asciiCode
        }

        return score
    }
}
