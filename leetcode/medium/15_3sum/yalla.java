// https://leetcode.com/problems/3sum/submissions/
// Runtime: 18 ms, faster than 88.47% of Java online submissions for 3Sum.
// Memory Usage: 42.6 MB, less than 89.13% of Java online submissions for 3Sum.
class Solution {
	public List<List<Integer>> threeSum(int[] nums) {
		if(nums == null || nums.length < 3) return new ArrayList<>();
		List<List<Integer>> ret = new ArrayList<>();
		Arrays.sort(nums);

		for(int i = 0; i < nums.length -2; i++){
			if(i == 0 || (i > 0 && nums[i] != nums[i-1])){ // 앞뒤가 같은건 체크하지 않아도 됨.
				int firstIdx = i+1;
				int lastIdx = nums.length -1;
				int sum = 0 - nums[i];

				while(firstIdx < lastIdx){
					if(sum == nums[firstIdx] + nums[lastIdx]){
						ret.add(Arrays.asList(nums[i], nums[firstIdx], nums[lastIdx]));
						//다시 중복된것 찾지 않아도 됨
						while(firstIdx < lastIdx &&(nums[firstIdx] == nums[firstIdx + 1])) firstIdx++;
						while(firstIdx < lastIdx &&(nums[lastIdx] == nums[lastIdx-1])) lastIdx--;

						firstIdx++;
						lastIdx--;
					}else if(sum < nums[firstIdx] + nums[lastIdx]){
						lastIdx--;
					}else{
						firstIdx++;
					}
				}
			}
		}

		return ret;
	}
}