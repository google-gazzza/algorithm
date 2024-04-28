class Solution {
    fun shortestWay(source: String, target: String): Int {
        var repeatCount = 0
        var sourceIndex = 0
        val sourceLength = source.length

        for (i in target.indices) {
            val targetChar = target[i]
            var found = false

            for (j in sourceIndex until (sourceIndex + sourceLength)) {
                if (j % sourceLength == 0) {
                    repeatCount++
                }

                if (source[j % sourceLength] == targetChar) {
                    found = true
                    sourceIndex = j + 1
                    break
                }
            }

            if (!found) {
                return -1
            }
        }

        return repeatCount
    }
}
