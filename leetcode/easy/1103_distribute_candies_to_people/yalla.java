// https://leetcode.com/problems/distribute-candies-to-people
// Runtime: 1 ms, faster than 94.71% of Java online submissions for Distribute Candies to People.
// Memory Usage: 36.4 MB, less than 91.41% of Java online submissions for Distribute Candies to People.
class Solution {
	public int[] distributeCandies(int candies, int num_people) {
		int[] result = new int[num_people];
		int giveCandy = 1;
		int idx = 0;
		while(candies > 0){
			if(candies - giveCandy > 0){
				result[idx] += giveCandy;
				candies -= giveCandy;
				idx++;
				giveCandy++;
			}else {
				result[idx] += candies;
				candies = 0;
			}

			if(idx >= num_people){
				idx = 0;
			}
		}
		return result;
	}
}