// Runtime: 168 ms, faster than 57.69% of Kotlin online submissions for Search Insert Position.
// Memory Usage: 36.2 MB, less than 100.00% of Kotlin online submissions for Search Insert Position.
class SearchInsertPosition {
    fun searchInsert(nums: IntArray, target: Int): Int {
        for(index in nums.indices) {
            if (target <= nums[index])
                return index
        }

        return nums.size
    }
}