/:/https://leetcode.com/problems/sort-array-by-parity-ii/submissions/
//Runtime: 3 ms, faster than 44.61% of Java online submissions for Sort Array By Parity II.
//Memory Usage: 49.5 MB, less than 7.41% of Java online submissions for Sort Array By Parity II


class Solution {
    public int[] sortArrayByParityII(int[] A) {
        int[] odd = new int[A.length/2];
		int[] even = new int[A.length/2]; 
		int[] result = new int[A.length];
		int oddInt = 0; 
		int evenInt = 0;
		for(int i = 0 ; i<A.length; i++) {
			if(A[i]%2== 0 ) {
				even[oddInt++] = A[i];
			}else {
				odd[evenInt++] = A[i];
			}
		}
		int j=0;
		for(int i = 0; i<A.length; i+=2) {
			result[i] = even[j];
			result[i+1] = odd[j++];
		}
		return result;
    }
}
