/**
 https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/description/
 runtime:14ms
 memory:44.48mb
 */
class Solution {
    public List<String> cellsInRange(String s) {
        List<String> result = new ArrayList<>();
        String start = s.split(":")[0];
        String end = s.split(":")[1];
        int startRow = Integer.parseInt(start.split("")[1]);
        char startCol = start.split("")[0].charAt(0);
        char endCol = end.split("")[0].charAt(0);
        int endRow = Integer.parseInt(end.split("")[1]);

        for(int i = startCol;i<=endCol;i++){
            for(int j=startRow;j<=endRow;j++){
                String colRow = Character.toString((char)i) + j;
                result.add(colRow);
            }
        }
        return result;
    }
}