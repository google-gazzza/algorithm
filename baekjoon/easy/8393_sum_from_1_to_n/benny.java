// https://www.acmicpc.net/problem/8393
// 시간 : 108 ms ,  자바 언어로 구현
// 메모리 : 14244 KB

import java.util.Scanner;

public class Main {

    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int result = 0;

        for(int i=1; i <= n; i++){
            result += i;
        }
        System.out.println(result);
    }
}
