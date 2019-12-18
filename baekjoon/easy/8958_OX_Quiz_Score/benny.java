// https://www.acmicpc.net/problem/8958
// 시간 : 120 ms ,  자바 언어로 구현
// 메모리 : 14572 KB

import java.util.Scanner;

public class Main{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int quizCount = Integer.parseInt(scanner.nextLine());
        int testCaseScore;
        int getScore = 0;
        String oxResult;

        for (int i = 0; i < quizCount; i++) {
            oxResult = scanner.nextLine();
            testCaseScore = 0;
            getScore = 0;
            for (int j = 0; j < oxResult.length(); j++) {
                if(oxResult.charAt(j) == 'O'){
                    getScore++;
                    testCaseScore += getScore;
                } else {
                    getScore = 0;
                };
            }
            System.out.println(testCaseScore);
        }
    }
}