//https://leetcode.com/problems/minimum-absolute-difference/
//Runtime: 25 ms, faster than 18.66% of Java online submissions for Minimum Absolute Difference.
//Memory Usage: 62.8 MB, less than 100.00% of Java online submissions for Minimum Absolute Difference

class Solution {
    public List<List<Integer>> minimumAbsDifference(int[] arr) {
        List<List<Integer>> result = new ArrayList<>();
        Arrays.sort(arr);
        int min = Integer.MAX_VALUE;

        for(int i = 0; i<arr.length-1; i++){
            int temp = Math.abs(arr[i]-arr[i+1]);
            if(min>temp){
                min = temp;
            }
        }
        for(int i = 0; i<arr.length-1; i++ ){
            List<Integer> list = new ArrayList<>();
            int temp = Math.abs(arr[i]-arr[i+1]);
            if(min == temp){
                list.add(arr[i]);
                list.add(arr[i+1]);
                result.add(list);
            }
        }
        return result;
    }
}
