/*
* https://leetcode.com/problems/duplicate-zeros/
* Runtime: 5 ms, faster than 32.28% of Java online submissions for Duplicate Zeros.
* Memory Usage: 43.3 MB, less than 100.00% of Java online submissions for Duplicate Zeros.
*/

class Solution {
    public void duplicateZeros(int[] arr) {
        Stack<Integer> stack = new Stack<>();
        for(int i = 0 ; i < arr.length; i++ ){
            if(stack.size()>= arr.length) break;
            stack.push(arr[i]);

            if(arr[i] == 0 && stack.size()!= arr.length){
                stack.push(0);
            }
        }
        for(int j = arr.length-1; j >= 0; j-- ){
            arr[j]= stack.pop();
        }
    }
}
