// https://www.acmicpc.net/problem/2562
// 시간 : 100 ms ,  자바 언어로 구현
// 메모리 : 14212 KB

import java.util.Scanner;

public class Main{
    public static void main(String[] args) {
        int[] value = new int[9];
        int maxValue = 0;
        int maxValueIndex = 1;
        Scanner scanner = new Scanner(System.in);

        for(int i = 0; i < 9; i++) {
            value[i] =Integer.parseInt(scanner.nextLine());
            if (maxValue < value[i]) maxValueIndex = i+1;
            maxValue = Math.max(maxValue,value[i]);
        }

        System.out.println(maxValue);
        System.out.println(maxValueIndex);
    }
}