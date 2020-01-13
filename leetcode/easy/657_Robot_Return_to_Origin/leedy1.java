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
