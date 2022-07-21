

/*
Nom: Omar El Metoui
Numéro d'étudiant: 300090069
Nom: Moumin Farah
Numéro d'étudiant: 300026540
   */

import java.util.Scanner;

public class Main extends Thread
{

    private final int num;
    private static  int[] fibonacci;

    public Main (int num) {
        this.num = num;
    }


    public static void main(String[] args) throws InterruptedException {

        int num = 0;
        System.out.print("Please input  a number larger than 0 :  "); // need to be larger than 0
        Scanner scanner = new Scanner(System.in);
        num = scanner.nextInt();
        scanner.close();



        if ( num <= 0 ){
            System.out.print("You didnt input a number larger than 0 ");
            return;
        }







        Thread child = new Main(num); // create the thread

        child.start();

        fibonacci = new int[num]; // array to store the numbers 


        for ( int i = 0 ; i<num ; i++){
          System.out.println(fibonacci[i]); // print 
        }



}



    public void run(){  // run function to store the numbers

      fibonacci[0] = 0;
      fibonacci[1] = 1;

      for(int i = 2; i < num; i++){
        fibonacci[i] = fibonacci(i);
      }





    }



    public  static  int fibonacci(int n) { // fibonacci function, didnt use recursion so we can print  more numbers
      int f[] = new int[n+2]; // 1 extra to handle case, n = 0
      int i;

      f[0] = 0;
      f[1] = 1;

    for (i = 2; i <= n; i++)
    {
     f[i] = f[i-1] + f[i-2];
    }

      return f[n];

  }





    }



