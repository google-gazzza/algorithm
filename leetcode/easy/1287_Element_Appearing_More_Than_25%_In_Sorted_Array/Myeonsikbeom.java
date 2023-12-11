/**https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array */
class Solution {
    public int findSpecialInteger(int[] arr) {
        int len = arr.length;
        double max = 0.0;
        int current = 0;
        Map<Integer,Integer> map = new HashMap<>();
        for(int num : arr){
            map.put(num,map.getOrDefault(num,0)+1);
        }
        for(Integer num:map.keySet()){
            int cnt = map.getOrDefault(num,0);

            double rate = (cnt * 100 )/len;
            if(rate >= 25 && rate > max){
                current = num;
            }
        }
        return current;
    }
}