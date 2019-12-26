// https://www.acmicpc.net/problem/3052
// 시간 : 108 ms ,  자바 언어로 구현
// 메모리 : 14264 KB

import java.util.Scanner;

public class Main{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] temp = new int[10];
        int differentNumberCount = 10;

        for (int i = 0; i < 10; i++) {
            temp[i] = scanner.nextInt() % 42;
            for (int j = 0; j < i; j++) {
                if( i != 0 && temp[i] == temp[j]) {
                    differentNumberCount--;
                    break;
                }
            }
        }

        System.out.println(differentNumberCount);
    }
}