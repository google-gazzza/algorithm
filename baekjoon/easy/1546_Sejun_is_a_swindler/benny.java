// https://www.acmicpc.net/problem/1546
// 시간 : 120 ms ,  자바 언어로 구현
// 메모리 : 14708 KB

import java.util.Scanner;

public class Main{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int numberOfSubjects = Integer.parseInt(scanner.nextLine());
        float highScore = 0.00f;
        float result = 0.00f;
        String[] stringScoreOfSubjects = scanner.nextLine().split(" ");
        float[] floatScoreOfSubjects = new float[numberOfSubjects];

        for (int i = 0; i < numberOfSubjects; i++) {
            floatScoreOfSubjects[i] = Float.parseFloat(stringScoreOfSubjects[i]);
            if(floatScoreOfSubjects[i] > highScore) highScore = floatScoreOfSubjects[i];
        }

        for (int i = 0; i < numberOfSubjects; i++) {
            floatScoreOfSubjects[i] = floatScoreOfSubjects[i] / highScore * 100.00f;
            result += floatScoreOfSubjects[i];
        }

        System.out.println(result / numberOfSubjects);
    }
}