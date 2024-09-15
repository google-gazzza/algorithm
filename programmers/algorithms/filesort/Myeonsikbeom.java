import java.util.*;
class Solution {
    private boolean isNumber(char c){
        return c >='0' && c<='9';
    }
    private String[] convertFileNameArr(String file){
        String[] fileStrArr = new String[3];
        boolean headComplete=false;
        int start=0;
        for(int j=0;j<file.length();j++){
            boolean isNum = isNumber(file.charAt(j));
            //1.HEAD 데이터 추출
            if(!headComplete && isNum){
                fileStrArr[0] = file.substring(start,j).toLowerCase();
                headComplete = true;
                start = j;
            }else if(headComplete && !isNum){
                //2. 숫자데이터 추출
                String numStr = file.substring(start,j);
                //숫자의 범위는 5자리까지라서 그 이후 자리는 자른다.
                if(numStr.length() > 5){
                    j = j-(numStr.length()-5);
                }
                numStr = file.substring(start,j);
                fileStrArr[1] = numStr;
                start = j;
                break;
            }

        }
        //맨끝까지 숫자가 있는경우.
        if(fileStrArr[1] == null){
            int len = file.length();
            String numStr = file.substring(start,len);
            fileStrArr[1] = numStr;
            //숫자의 범위는 5자리까지라서 그 이후 자리는 자른다.
            if(numStr.length() > 5){
                len = len-(numStr.length()-5);
            }
            numStr = file.substring(start,len);
            fileStrArr[1] = numStr;

        }
        return fileStrArr;
    }
    public String[] solution(String[] files) {
        String[] answer = new String[files.length];


        Arrays.sort(files,(f1,f2)-> {
            String[] arr1 = convertFileNameArr(f1);
            String[] arr2 = convertFileNameArr(f2);
            int headCompare = arr1[0].compareTo(arr2[0]);
            if(headCompare == 0){
                //2.문자정렬의 순서가 똑같을때는 숫자로 정렬한다.(0으로 시작하면 0은 따지지않고한다.)
                int numberCompare = Integer.parseInt(arr1[1]) -  Integer.parseInt(arr2[1]);
                if(numberCompare == 0){
                    //3.1,2번의 정렬결과가 똑같다면 순서 그대로.
                    return 0;
                }
                return numberCompare;
            }
            return headCompare;




        });
        return files;
    }
}