// https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/
// Runtime: 228 ms, faster than 32.26% of Kotlin online submissions for Remove Duplicates from Sorted Array.
// Memory Usage: 37.9 MB, less than 100.00% of Kotlin online submissions for Remove Duplicates from Sorted Array.
class RemoveDuplicatesFromSortedArray {
    fun removeDuplicates(nums: IntArray): Int {
        var duplicateCount = 0
        for (index in nums.indices) {
            if (nums[index] != nums[duplicateCount]) {
                nums[++duplicateCount] = nums[index]
            }
        }
        return duplicateCount + 1
    }
}