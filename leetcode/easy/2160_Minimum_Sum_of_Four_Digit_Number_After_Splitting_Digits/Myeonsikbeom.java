/**
 https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/

 Runtime : 6 ms
 Memory : 39.3 MB
 */
class Solution {
    public int minimumSum(int num) {
        // String _num = String.valueOf(num);
        // List<String> sortedNum = Arrays
        //         .stream(_num.split(""))
        //         .mapToInt(Integer::parseInt)
        //         .sorted()
        //         .mapToObj(Integer::toString)
        //         .collect(Collectors.toList());
        // int num1 = Integer.parseInt(sortedNum.get(0)+sortedNum.get(2));
        // int num2 = Integer.parseInt(sortedNum.get(1)+sortedNum.get(3));
        // return num1+num2;
        int[] sortedArr = new int[4];
        for(int i=0;i<4;i++){
            sortedArr[i]=num%10;
            num = num/10;
        }
        Arrays.sort(sortedArr);
        return (sortedArr[0]*10 + sortedArr[2])+(sortedArr[1]*10 + sortedArr[3]);
    }
}