import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        int A;
        Scanner sc = new Scanner(System.in);
        A = sc.nextInt();
        if(A<100){
            System.out.println(A);
        }else{
            int answer = 99;
            for(int i=100;i<=A;i++){
                char[] chA = String.valueOf(i).toCharArray();
                if((chA[0]-chA[1]) ==(chA[1]-chA[2])){
                    answer++;
                }
            }
            System.out.println(answer);
        }
    }
}