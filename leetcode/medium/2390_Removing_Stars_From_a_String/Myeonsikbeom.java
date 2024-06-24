class Solution {
    public String removeStars(String s) {
        Stack<Character> stack = new Stack<>();
        StringBuilder result = new StringBuilder();
        for(int i=0;i<s.length();i++){
            char c = s.charAt(i);
            if(c == '*' && !stack.isEmpty()){ //문자열이 *라면 *에 인접한 문자열 pop
                stack.pop();
            }else{ //문자열 추가.
                stack.add(c);

            }
        }

        while(!stack.isEmpty()){//스택을 비울때까지 문자열을 만들고 이를 뒤집은 결과를 반환.
            result.append(stack.pop());
        }
        return result.reverse().toString();
    }
}