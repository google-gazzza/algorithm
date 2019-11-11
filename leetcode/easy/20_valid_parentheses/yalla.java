//  https://leetcode.com/problems/valid-parentheses/
//  Runtime: 1 ms, faster than 98.73% of Java online submissions for Valid Parentheses.
//  Memory Usage: 34.2 MB, less than 100.00% of Java online submissions for Valid Parentheses.

//stack
//가장 마지막에 열린문자부터 닫아야 한다.
//배열로 만들고 stack에 넣으면서 이전값과 반복해서 비교하기
//닫힐때는 이전에 들어간 값이랑 짝인지 비교


class Solution {
  public boolean isValid(String s) {
    Stack<Character> stack = new Stack<>();
    char[] arr = s.toCharArray();

    for(char c : arr){
      if(c == '(' || c == '{' || c == '['){
        stack.push(c);
      }else if(c == ')'){
        if(stack.size() == 0 || stack.pop() != '(' ){
          return false;
        }
      }else if(c == '}'){
        if(stack.size() == 0 || stack.pop() != '{' ){
          return false;
        }
      }else if(c == ']'){
        if(stack.size() == 0 || stack.pop() != '[' ){
          return false;
        }
      }else{
        return false;
      }
    }

    if(stack.size() != 0){
      return false;
    }

    return true;
  }
}
