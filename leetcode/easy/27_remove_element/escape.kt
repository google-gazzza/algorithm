// Runtime: 176 ms, faster than 41.82% of Kotlin online submissions for Remove Element.
// Memory Usage: 32.9 MB, less than 100.00% of Kotlin online submissions for Remove Element.
class RemoveElement {
    fun removeElement(nums: IntArray, `val`: Int): Int {
        var count = 0

        for (index in nums.indices) {
            if (nums[index] != `val`) {
                nums[count++] = nums[index]
            }
        }

        return count
    }
}