class Solution {
    fun multiply(mat1: Array<IntArray>, mat2: Array<IntArray>): Array<IntArray> {
        val result = Array(mat1.size) { IntArray(mat2[0].size) { 0 } }

        for (i in mat1.indices) {
            for (j in mat2[0].indices) {
                var sum = 0

                for (k in mat2.indices) {
                    sum += mat1[i][k] * mat2[k][j]
                }

                result[i][j] = sum
            }
        }

        return result
    }
}
