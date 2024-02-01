/**
  * https://leetcode.com/problems/rotate-string/
  * 
  * Runtime: 420 ms, faster than 50.00% of Scala online submissions for Rotate String.
  * Memory Usage: 51.6 MB, less than 100.00% of Scala online submissions for Rotate String.
  */
  object Solution {
    def rotateString(A: String, B: String): Boolean = {
        if (A.length != B.length) return false
        val AA = A + A
        
        AA.contains(B)
    }
}
