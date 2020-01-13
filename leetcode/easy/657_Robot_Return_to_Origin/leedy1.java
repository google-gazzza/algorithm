//https://leetcode.com/problems/robot-return-to-origin/submissions/
//Runtime: 8 ms, faster than 49.60% of Java online submissions for Robot Return to Origin.
//Memory Usage: 38.4 MB, less than 63.51% of Java online submissions for Robot Return to Origin.


class Solution {
    public boolean judgeCircle(String moves) {
      int a = 0; 
		int b = 0;
	
		for(char temp :  moves.toCharArray()) {
			if(temp =='U') {
				a++;
			}else if(temp =='D') {
				a--;
			}
			else if(temp =='R') {
				b++;
			}
			else if(temp =='L') {
				b--;
			}
		}
		if(a == 0 && b ==0) {
			return true;
		}else {
			return false;
		}
    }
}
