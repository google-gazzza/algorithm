// https://leetcode.com/problems/implement-strstr/
// Runtime: 12 ms, faster than 79.07% of Swift online submissions for Implement strStr().
// Memory Usage: 20.4 MB, less than 100.00% of Swift online submissions for Implement strStr().

class Solution {
    func strStr(_ haystack: String, _ needle: String) -> Int {
        if needle.isEmpty {
            return 0
        } else if haystack.count < needle.count {
            return -1
        }
        
        let count = haystack.count - needle.count
        for i in 0...count {
            let startIndex = haystack.index(haystack.startIndex, offsetBy: i)
            let endIndex = haystack.index(startIndex, offsetBy: needle.count)
            if String(haystack[startIndex..<endIndex]) == needle {
                return i
            }
        }

        return -1
    }
}