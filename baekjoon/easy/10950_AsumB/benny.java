// https://www.acmicpc.net/problem/10950
// 시간 : 128 ms ,  자바 언어로 구현
// 메모리 : 14504 KB


import java.util.Scanner;

public class Main {

    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        int T = scanner.nextInt();

        for(int i; i < T; i++){
            int A = scanner.nextInt();
            int B = scanner.nextInt();
            System.out.println(A + B);
        }
    }
}
