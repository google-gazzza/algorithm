//https://leetcode.com/problems/di-string-match/submissions/
//Runtime: 2 ms, faster than 93.87% of Java online submissions for DI String Match.
//Memory Usage: 46.5 MB, less than 6.82% of Java online submissions for DI String Match.

class Solution {
    public int[] diStringMatch(String S) {
        int[] result = new int[S.length()+1];
        
        int d = S.length();
        int i = 0;
        
        for(int k=0; k<S.length(); k++) {
        	if('D'== S.charAt(k)) {
        		result[k] = d--;
        	}else {
        		result[k] = i++;
        	}
        }
        result[S.length()] =  ('D' ==S.charAt(S.length()-1)) ? d:i;
		return result;
    }
}
