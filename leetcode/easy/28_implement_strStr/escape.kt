// Runtime: 184 ms, faster than 23.58% of Kotlin online submissions for Implement strStr().
// Memory Usage: 35.2 MB, less than 100.00% of Kotlin online submissions for Implement strStr().
class ImplementStrstr {
    fun strStr(haystack: String, needle: String): Int {
        return if (needle.isEmpty()) 0 else haystack.indexOf(needle)
    }
}