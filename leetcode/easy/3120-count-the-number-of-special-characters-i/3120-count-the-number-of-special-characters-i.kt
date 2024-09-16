// 3105-longest-strictly-increasing-or-strictly-decreasing-subarray
// URL: https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/description/


class Solution {
    fun numberOfSpecialChars(word: String): Int {
        // I used this because hashsetOf's lookup worst time complexity is O(n)
        var lowerMutableSet = mutableSetOf<Char>()
        var upperMutableSet = mutableSetOf<Char>()

        for (char in word) {
            if (char.isLowerCase()) {
                lowerMutableSet.add(char)
            } else {
                upperMutableSet.add(char)
            }
        }

        var count = 0

        for (char in lowerMutableSet) {
            if (upperMutableSet.contains(char.uppercaseChar())) {
                count++
            }
        }

        return count
    }
}
