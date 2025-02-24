// 868-binary-gap
// URL: https://leetcode.com/problems/binary-gap/description/

class Solution {
    fun toBinaryString(n: Int): String {
        return Integer.toBinaryString(n)
    }

    fun binaryGap(n: Int): Int {
        var binary = toBinaryString(n)
        var max = 0
        var last = -1

        for (i in 0 until binary.length) {
            if (binary[i] == '1') {
                if (last != -1) {
                    max = Math.max(max, i - last)
                }
                last = i
            }
        }

        return max
    }
}
