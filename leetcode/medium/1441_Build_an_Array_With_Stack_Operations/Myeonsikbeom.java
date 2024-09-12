/**
 https://leetcode.com/problems/build-an-array-with-stack-operations/
 runtime:0ms
 memory:41.92MB
 */
class Solution {

    public boolean isHasData(int[] target, int n){
        for(int i=0;i<target.length;i++){
            if(target[i] == n){
                return true;
            }
        }
        return false;
    }
    public boolean isEqaulStackTarget(int[] target, List<Integer> stackInt){
        for(int i=0;i<target.length;i++){
            if(target[i] != stackInt.get(i)){
                return false;
            }
        }
        return true;
    }
    public List<String> buildArray(int[] target, int n) {
        final String PUSH="Push";
        final String POP="Pop";

        List<String> stack = new ArrayList<>();
        List<Integer> stackInt = new ArrayList<>();
        int targetLen = target.length;
        for(int i=1;i<=n;i++){
            int stackSize = stack.size();
            if(isHasData(target,i)){
                stack.add(PUSH);
                stackInt.add(i);
            }else{
                stack.add(PUSH);
                stack.add(POP);
            }

            if(stackInt.size() == targetLen && isEqaulStackTarget(target,stackInt)){//숫자 스택과 target이 같으면 스택 작업 종료.
                break;
            }
        }
        return stack;
    }
}