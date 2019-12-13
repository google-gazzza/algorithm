// https://www.acmicpc.net/problem/2577
// 시간 : 104 ms ,  자바 언어로 구현
// 메모리 : 14264 KB

import java.util.Scanner;

public class Main{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int A = scanner.nextInt();
        int B = scanner.nextInt();
        int C = scanner.nextInt();
        String multiplyNumber = Integer.toString(A * B * C);
        int[] useNumber = new int[10];

        for (int i = 0; i < multiplyNumber.length(); i++) {
            int temp = Character.getNumericValue(multiplyNumber.charAt(i));
            useNumber[temp]++;
        }

        for (int numberCount : useNumber) System.out.println(numberCount);
    }
}