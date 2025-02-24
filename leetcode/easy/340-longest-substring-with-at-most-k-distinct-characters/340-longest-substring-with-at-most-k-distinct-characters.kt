class Solution {
    fun lengthOfLongestSubstringKDistinct(s: String, k: Int): Int {
        if (k == 0) {
            return 0
        }

        val charArr = mutableListOf<Char>()
        val countArr = mutableListOf<Int>()

        var i = 0
        while (i < s.length) {
            charArr.add(s[i])
            var count = 1

            while (i + count < s.length && s[i] == s[i + count]) {
                count++
            }

            i += count
            countArr.add(count)
        }

        var maxWindow = 0
        val charCount = mutableMapOf<Char, Int>()
        var windowSum = 0
        val windowArr = mutableListOf<Pair<Char, Int>>()

        for (i in charArr.indices) {
            while (charArr[i] !in charCount && charCount.size >= k) {
                val (char, count) = windowArr.removeAt(0)
                windowSum -= count

                charCount[char] = charCount.getOrDefault(char, 0) - 1
                if (charCount[char] == 0) {
                    charCount.remove(char)
                }
            }

            charCount[charArr[i]] = charCount.getOrDefault(charArr[i], 0) + 1
            windowArr.add(Pair(charArr[i], countArr[i]))
            windowSum += countArr[i]

            maxWindow = maxOf(maxWindow, windowSum)
        }

        return maxWindow
    }
}