// https://www.acmicpc.net/problem/4344
// 시간 : 172 ms ,  자바 언어로 구현
// 메모리 : 16716 KB

import java.util.Scanner;

public class Main{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int sum = 0;
        int avg = 0;
        int avgOverCount = 0;
        int caseCount;

        int n = Integer.parseInt(scanner.nextLine());

        for (int i = 0; i < n; i++) {
            String[] temp = scanner.nextLine().split(" ");
            caseCount = Integer.parseInt(temp[0]);
            for (int j = 1; j <= caseCount; j++) {
                sum += Integer.parseInt(temp[j]);
            }
            avg = sum / caseCount;
            for (int j = 1; j <= caseCount; j++) {
                if(Integer.parseInt(temp[j]) > avg) avgOverCount++;
            }
            System.out.printf("%04.3f%%%n",Math.round(((float)avgOverCount / (float)caseCount) * 100000) / 1000.0);

            sum = 0;
            avgOverCount = 0;
        }
    }
}