import java.util.*;
class Solution {
        /*예를들면, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,999] 같은 입력이 있다고 하면요.
2중 for문을 사용한 솔루션은 인풋에 따라 계산량이 줄 가능성이 있지만, 뒷큰수가 인풋의 맨 뒤에만 있는경우에는 break가 작동하지 않아서 의미가 없습니다.
이 경우 계산량은 n*logn 이 되겠죠.
반면 스택을 사용하는 경우 999에 도착할때까지 비교와 스택입력만 하게되므로 계산량 n, 마지막 항목에서 스택에서 쌓아둔 값을 하나씩 빼서 비교하는데 n이 들겠죠.
따라서 2n이 계산량이 됩니다.
*/
/*
스택에 인덱스를 넣어 관리하는 방식으로 (인덱스: 실제 값)을 기준으로 두었습니다.

순회하면서 현재 값 (numbers[i])이 스택에 최상단 (stack.peek()) 값보다 크면 뒤에 있는 큰 수에 해당합니다.  해당 경우에 하위 스택 원소들도 탐색해 보면서 추가로 해당하는 원소가 있는지 판별 후 있다면 pop 해주면서 인덱스에 정답 값을 넣어줍니다.

마지막으로 뒤에 있는 큰 수가 없는 케이스를 위해 스택이 남아있는 경우 -1로 채워줍니다.
*/
    public int[] solution(int[] numbers) {
        int len = numbers.length;
        int[] answer = new int[len];
        Arrays.fill(answer,-1);//answer배열의 값을 기본적으로 -1으로 세팅.
        Stack<Integer> stack = new Stack<>();
        for(int i=0;i<len;i++){
            while(!stack.isEmpty() && numbers[stack.peek()] < numbers[i]){
                answer[stack.pop()] = numbers[i];
            }
            stack.push(i);
        }
        return answer;
    }
}