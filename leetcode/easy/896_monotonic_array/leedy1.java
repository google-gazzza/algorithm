//https://leetcode.com/problems/monotonic-array/
//Runtime: 3 ms, faster than 8.13% of Java online submissions for Monotonic Array.
//Memory Usage: 65.6 MB, less than 21.43% of Java online submissions for Monotonic Array.

class Solution {
    public boolean isMonotonic(int[] A) {
        boolean isIncreasing = false;
        boolean isDecreasing = false;

        for(int i = 0; i<A.length-1; i++){
            if(A[i+1] - A[i] < 0){
                isIncreasing = true;
            }
            if(A[i+1] -A[i] > 0) {
                isDecreasing = true;
            }

            if(isIncreasing && isDecreasing){
                return false;
            }
        }
       return true;
    }
}
