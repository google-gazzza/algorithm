//https://leetcode.com/problems/delete-columns-to-make-sorted/
//Runtime: 222 ms, faster than 5.18% of Java online submissions for Delete Columns to Make Sorted.
//Memory Usage: 54.7 MB, less than 8.33% of Java online submissions for Delete Columns to Make Sorted

class Solution {
    public int minDeletionSize(String[] A) {
        int result = 0;
	for( int j=0; j<A[0].length(); j++) {
		String temp="";
		for(int i = 0; i<A.length ; i++) {
			temp+=A[i].toCharArray()[j];
		}
		char[] charArr = temp.toCharArray();
		Arrays.sort(charArr);
		String sortStr = String.valueOf(charArr);
		if(!temp.equals(sortStr)) {
			result++;
		}			
	}
	return result; 
    }
}
