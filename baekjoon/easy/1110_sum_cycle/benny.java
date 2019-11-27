// https://www.acmicpc.net/problem/2741
// 시간 : 196 ms ,  자바 언어로 구현
// 메모리 : 31004 KB

import java.util.Scanner;

public class Main{
    public static void main(String[] args) {
        int cycle = 0;

        try {
            Scanner scanner = new Scanner(System.in);
            // 1. 26을 받는다.
            String comparableString = scanner.nextLine();
            if(comparableString.length() < 2){
                comparableString = "0" + comparableString;
            }
            String temp = comparableString;
            String firstNumber;
            String secondNumber;


            while (true) {
                // 2. 26을 쪼갠다.
                firstNumber = temp.substring(0,1);
                secondNumber = temp.substring(1,2);


                // 3. 2와 6을 더한 수를 6과 붙힌다.
                String thirdNumber = Integer.toString(
                        Integer.parseInt(firstNumber) + Integer.parseInt(secondNumber)
                );
                String result = secondNumber + thirdNumber.substring(thirdNumber.length()-1,thirdNumber.length());
                cycle++;
                if (comparableString.equals(result)) {
                    System.out.println(cycle);
                    break;
                }
                temp = result;
            }

        } catch(Exception e) {
            e.printStackTrace();
        }
    }
}