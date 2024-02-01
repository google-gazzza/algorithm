// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Runtime: 76 ms, faster than 77.30% of Swift online submissions for Remove Duplicates from Sorted Array.
// Memory Usage: 20.9 MB, less than 25.00% of Swift online submissions for Remove Duplicates from Sorted Array.

class Solution {
    func removeDuplicates(_ nums: inout [Int]) -> Int {
        if nums.count > 1 { 
            var count = 1

            for i in 1..<nums.count {
                if nums[i] != nums[i-1] {
                    nums[count] = nums[i]
                    count += 1
                }
            }

            return count
        } else {
            return nums.count
        }
        
    }
}