class Solution {
    public int minAddToMakeValid(String s) {
        /**
         유효한 괄호문자열을 만들기위한 최소의 갯수를 구하는 문제.
         ()와 짝이 맞지않는경우에는 스택에 문자열을 넣고
         스택에 가장 최근으로 들어간 문자열과 탐색중인 문자열이 () 짝이 맞는경우에는 스택에서 빠진다.

         스택의 사이즈는 유효한 괄호문자열로 만들기위한 최소의 문자열들만 남았기때문에 해당 사이즈가 정답이다.

         */
        Stack<String> stack = new Stack<>();
        for(int i=0;i<s.length();i++){
            String str = s.charAt(i)+"";
            if( !stack.isEmpty() && stack.peek().equals("(") && str.equals(")")){
                stack.pop();
            }else{
                stack.add(str);
            }


        }
        return stack.size();
    }
}