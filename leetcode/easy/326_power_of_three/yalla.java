// https://leetcode.com/problems/power-of-three/
// Runtime: 12 ms, faster than 16.88% of Java online submissions for Power of Three.
// Memory Usage: 38.1 MB, less than 99.76% of Java online submissions for Power of Three.
class Solution {
	public boolean isPowerOfThree(int n) {
		if(n == 0) return false;
		if(n == 1) return true;
		if(n > 1){
			return isPowerOfThree(n /3) && n % 3 == 0;
		}else{
			return false;
		}
	}
}