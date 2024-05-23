class Solution {
    public int subsetXORSum(int[] nums) {
        int result = 0;
        List<List<Integer>> subsets = new ArrayList<>();
        subsets.add(new ArrayList<>());
        for(int i=0;i<nums.length;i++){
            int size = subsets.size();
            for(int j=0;j<size;j++){
                List<Integer> e = new ArrayList<>(subsets.get(j));
                e.add(nums[i]);
                subsets.add(e);
            }
        }
        for(List<Integer> e : subsets){
            int xor = 0;
            for(Integer i : e){
                xor ^= i;
            }
            result +=xor;
        }
        return result;
    }
}