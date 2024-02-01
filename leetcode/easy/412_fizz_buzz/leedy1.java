/*
* https://leetcode.com/problems/fizz-buzz/
* Runtime: 1 ms, faster than 99.85% of Java online submissions for Fizz Buzz.
* Memory Usage: 42.4 MB, less than 5.40% of Java online submissions for Fizz Buzz.
*/


class Solution {
    public List<String> fizzBuzz(int n) {
        List<String> result = new ArrayList<>();
        for(int i = 1; i < n+1; i ++){
            if(i%3 == 0 && i%5 == 0){
                result.add("FizzBuzz");
            }else if(i%3 == 0){
                result.add("Fizz");
            }else if(i%5 == 0){
                result.add("Buzz");
            }else{
                result.add(String.valueOf(i));
            }
        }
        return result;
    }
}
