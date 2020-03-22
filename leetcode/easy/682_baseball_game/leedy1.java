//https://leetcode.com/problems/baseball-game/
//Runtime: 2 ms, faster than 92.99% of Java online submissions for Baseball Game.
//Memory Usage: 38 MB, less than 7.69% of Java online submissions for Baseball Game.


class Solution {
    public int calPoints(String[] ops) {
        Stack<Integer> stack = new Stack<>();
        int result = 0;
        for(String str : ops){
            if("C".equals(str)){
                result-= stack.pop();

            }
            else if("D".equals(str)){
                int temp =stack.peek();
                stack.push(temp*2);
                result+=temp*2;
            }
            else if("+".equals(str)){
                int index = stack.lastIndexOf(stack.peek());
                int last2 = stack.get(index)+stack.get(index-1);
                stack.push(last2);
                result+= last2;
            }else{
                stack.push(Integer.parseInt(str));
                result+= Integer.parseInt(str);
            }
        }
        return result;
    }
}
