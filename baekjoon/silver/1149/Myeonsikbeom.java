import java.util.*;
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        int answer = 0;
        int A;

        Scanner sc = new Scanner(System.in);
        A = sc.nextInt();
        int[][] arr = new int[A+1][];
        int[][] darr = new int[A+1][3];
        for(int i=1;i<=A;i++){
            int r = sc.nextInt();
            int g = sc.nextInt();
            int b = sc.nextInt();
            arr[i] = new int[]{r,g,b};
        }

        for(int i=1;i<=A;i++){
            darr[i][0] = arr[i][0] + Math.min(darr[i-1][1],darr[i-1][2]);
            darr[i][1] = arr[i][1] + Math.min(darr[i-1][0],darr[i-1][2]);
            darr[i][2] = arr[i][2] + Math.min(darr[i-1][0],darr[i-1][1]);

        }
        System.out.println(Math.min(Math.min(darr[A][0],darr[A][1]),darr[A][2]));
    }
}