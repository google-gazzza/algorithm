import java.util.*;
class Solution {
    public int[][] solution(int[][] data, String ext, int val_ext, String sort_by) {
        Map<String,Integer> category = new HashMap<>();
        category.put("code",0);
        category.put("date",1);
        category.put("maximum",2);
        category.put("remain",3);
        return Arrays.stream(data).filter(arr->{
            return arr[category.get(ext)] <= val_ext;

        }).sorted((data1,data2)->{
            return data1[category.get(sort_by)]-data2[category.get(sort_by)];

        }).toArray(int[][]::new);
    }
}