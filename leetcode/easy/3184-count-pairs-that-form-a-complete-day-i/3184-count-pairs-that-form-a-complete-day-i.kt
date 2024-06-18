// 3184-count-pairs-that-form-a-complete-day-i
// URL: https://leetcode.com/problems/count-pairs-that-form-a-complete-day-i/description/

class Solution {
    fun countCompleteDayPairs(hours: IntArray): Int {
        var pairCount = 0


        // i want iterate two depth iteration of entire input method 'hours'
        // what I need is find hours[i] +hour[j] is equivalent to %24 == 0

        for (i in 0 until hours.size) {
            for (j in i + 1 until hours.size) {
                if ((hours[i] + hours[j]) % 24 == 0) {
                    pairCount++
                }
            }
        }

        return pairCount
    }
}
