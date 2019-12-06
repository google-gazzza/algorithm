// https://www.acmicpc.net/problem/2562
// 시간 : 96 ms ,  자바 언어로 구현
// 메모리 : 14188 KB

import java.util.Scanner;

public class Main{
    public static void main(String[] args) {
        int[] value = new int[9];
        int maxValue = 0;ㅁ
        int maxValueIndex = 1;
        Scanner scanner = new Scanner(System.in);

        for(int i = 0; i < 9; i++) {
            value[i] =Integer.parseInt(scanner.nextLine());
            if(maxValue < value[i]){
                maxValue = value[i];
                maxValueIndex = i+1;
            }
        }

        System.out.println(maxValue);
        System.out.println(maxValueIndex);
    }
}