/**
 https://leetcode.com/problems/subsets/?envType=daily-question&envId=2024-05-21
 Runtime:1ms
 Memory:42.96MB
 */
class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> answer = new ArrayList<List<Integer>>(); //정답
        answer.add(new ArrayList<>()); // 비워져있는 목록 추가.
        for(int i=0;i<nums.length;i++){
            int size = answer.size();
            for(int j=0;j<size;j++){ // answer.size()가 아닌 size변수를 미리할당
                List<Integer> element = new ArrayList<>(answer.get(j)); // 해당위치 배열 복사
                element.add(nums[i]); // 복사된 배열에 값 추가
                answer.add(element);// 복사된 배열을 answer에 추가
            }
        }
        return answer;
    }
}