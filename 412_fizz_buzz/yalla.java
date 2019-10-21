//https://leetcode.com/problems/fizz-buzz/
// Runtime: 1 ms, faster than 100.00% of Java online submissions for Fizz Buzz.
// Memory Usage: 37.2 MB, less than 100.00% of Java online submissions for Fizz Buzz.

//한번에 최대 2칸씩 오를 수 있음.
//안올라가면 0, 1칸 올라가면 1, 2칸 올라가면 2, 그이후로 계산

//답은 마지막 step만 알면 됨
//이전 값을 계속 불려가며 이전값을 더하는 식으로

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