// 3014-minimum-number-of-pushes-to-type-word-i
// URL: https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i/description/

class Solution {
    fun minimumPushes(word: String): Int {
        var countMap = mutableMapOf<Char, Int>()

        for (c in word) {
            countMap[c] = countMap.getOrDefault(c, 0) + 1
        }

        var sortedPairDesc = countMap.toList().sortedByDescending { (_, value) -> value }
        var count = 0

        for (i in sortedPairDesc.indices) {
            if (sortedPairDesc[i].second == 0) {
                break
            }

            when {
                i in 0..7 -> {
                    count += sortedPairDesc[i].second
                }

                i in 8..15 -> {
                    count += sortedPairDesc[i].second * 2
                }

                i in 16..23 -> {
                    count += sortedPairDesc[i].second * 3
                }

                else -> {
                    count += sortedPairDesc[i].second * 4
                }
            }
        }

        return count
    }
}
