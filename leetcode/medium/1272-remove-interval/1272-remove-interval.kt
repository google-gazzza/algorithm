class Solution {
    fun removeInterval(intervals: Array<IntArray>, toBeRemoved: IntArray): List<List<Int>> {
        var result = mutableListOf<List<Int>>()

        for (interval in intervals) {
            if (interval[1] <= toBeRemoved[0] || interval[0] >= toBeRemoved[1]) {
                result.add(listOf(interval[0], interval[1]))
            } else {
                if (interval[0] < toBeRemoved[0]) {
                    result.add(listOf(interval[0], toBeRemoved[0]))
                }
                if (interval[1] > toBeRemoved[1]) {
                    result.add(listOf(toBeRemoved[1], interval[1]))
                }
            }
        }

        return result
    }
}
