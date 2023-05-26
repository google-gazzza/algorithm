/**
  * https://leetcode.com/problems/valid-anagram/
  *    
  * Runtime: 576 ms, faster than 26.67% of Scala online submissions for Valid Anagram.
  * Memory Usage: 50.3 MB, less than 100.00% of Scala online submissions for Valid Anagram.
  *  
*/
object Solution {
    def isAnagram(s: String, t: String): Boolean = {
        s.sorted == t.sorted
    }
}
