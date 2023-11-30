/**
 runtime:22ms
 memory:43.69mb
 */
class Solution {
    public List<Integer> findKDistantIndices(int[] nums, int key, int k) {
        List<Integer> answer = new ArrayList<>();

        for(int i=0;i<nums.length;i++){
            int keyIndex = -1;
            for(int j=0;j<nums.length;j++){
                if(Math.abs(i-j) <= k && nums[j] == key){
                    keyIndex = i;
                }
            }
            if(keyIndex != -1){
                answer.add(keyIndex);
            }

        }
        return answer;
    }
}