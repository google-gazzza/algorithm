// https://leetcode.com/problems/longest-common-prefix/
// Runtime: 188 ms, faster than 35.20% of Kotlin online submissions for Longest Common Prefix.
// Memory Usage: 37.4 MB, less than 100.00% of Kotlin online submissions for Longest Common Prefix.
//class LongestCommonPrefix {
//    fun longestCommonPrefix(strs: Array<String>): String {
//        return if (strs.isEmpty()) "" else strs.reduce { acc, o -> acc.commonPrefixWith(o) }
//    }
//}

// Runtime: 176 ms, faster than 50.28% of Kotlin online submissions for Longest Common Prefix.
// Memory Usage: 35.5 MB, less than 100.00% of Kotlin online submissions for Longest Common Prefix.
class LongestCommonPrefix {
    fun longestCommonPrefix(strs: Array<String>): String {
        if (strs.isEmpty())
            return ""

        strs.sort()

        val first = strs[0]
        val last = strs[strs.size - 1]

        for (index in strs[0].indices) {
            if (first[index] != last[index])
                return strs[0].substring(0, index)
        }

        return strs[0]
    }
}