//https://leetcode.com/problems/fizz-buzz/
// Runtime: 1 ms, faster than 100.00% of Java online submissions for Fizz Buzz.
// Memory Usage: 37.2 MB, less than 100.00% of Java online submissions for Fizz Buzz.

class Solution {
  public List<String> fizzBuzz(int n) {
    List<String> ret = new ArrayList<>();
    for(int i=1; i <= n; i++){
      if(i % 3 == 0 && i % 5 == 0) {
        ret.add("FizzBuzz");
      }else if(i % 3 == 0){
        ret.add("Fizz");
      }else if(i % 5 == 0 ){
        ret.add("Buzz");
      }else{
        ret.add(String.valueOf(i));
      }
    }
    return ret;
  }
}