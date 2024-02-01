// https://leetcode.com/problems/palindrome-number/submissions/
// Runtime: 172 ms, faster than 90.09% of Kotlin online submissions for Palindrome Number.
// Memory Usage: 42.9 MB, less than 11.11% of Kotlin online submissions for Palindrome Number.
//class PalindromeNumber {
//    fun isPalindrome(x: Int): Boolean {
//        val palindromeStr = x.toString()
//        return palindromeStr == palindromeStr.reversed()
//    }
//}


// Runtime: 152 ms, faster than 99.10% of Kotlin online submissions for Palindrome Number.
// Memory Usage: 40.7 MB, less than 11.11% of Kotlin online submissions for Palindrome Number.
class PalindromeNumber {
    fun isPalindrome(x: Int): Boolean {
        return when {
            x < 0 -> false
            x in 0..9 -> true
            else -> x == reverse(x, 0)
        }
    }

    // ReverseInteger.recusive
    tailrec fun reverse(x: Int, result: Long): Int {
        if (x == 0)
            return if (result in Int.MIN_VALUE..Int.MAX_VALUE) result.toInt() else 0
        return reverse(x / 10, result * 10 + x % 10)
    }
}