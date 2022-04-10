// https://leetcode.com/problems/maximum-units-on-a-truck/submissions/
// Runtime: 7 ms, faster than 94.87% of Java online submissions for Maximum Units on a Truck.
// Memory Usage: 39.5 MB, less than 45.11% of Java online submissions for Maximum Units on a Truck.

// greedy
class Solution {
	public int maximumUnits(int[][] boxTypes, int truckSize) {
		Arrays.sort(boxTypes, (x,y) -> y[1] - x[1]);
		int result = 0;
		int remainSize = truckSize;

		for(int[] boxType : boxTypes){
			if(boxType[0] <= remainSize){
				result += boxType[0] * boxType[1];
				remainSize -= boxType[0];
			}else{
				result += remainSize * boxType[1];
				return result;
			}
		}
		return result;
	}
}