/**
 https://leetcode.com/problems/destination-city/
 */
class Solution {
    public String destCity(List<List<String>> paths) {
        //다른 Topics를 이용하여 풀어본 문제
        Set<String> start = new HashSet<>();
        Set<String> dest = new HashSet<>();

        //주어진 경로 List들을 반복하면서 시작지와 목적지 Set에 저장.
        for(List<String>path : paths){
            start.add(path.get(0));
            dest.add(path.get(1));
        }
        //목적지를 돌면서 시작지에 목적지가 포함되지않았다면, 그게 최종목적지이다.
        for(String city : dest){
            if(!start.contains(city)){
                return city;
            }
        }
        return "";
        //내가 푼 문제
        // String dest = paths.get(0).get(1);

        // for(int i=1;i<paths.size();i++){

        //     for(int j = 0;j<paths.size();j++){
        //         String start = paths.get(j).get(0);
        //         if(dest.equals(start)){
        //             dest = paths.get(j).get(1);
        //         }
        //     }
        //  }
        // return dest;
    }
}