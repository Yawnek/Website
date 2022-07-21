/*
Nom: Omar El Metoui
Numéro d'étudiant: 300090069
Nom: Moumin Farah
Numéro d'étudiant: 300026540
*/

import java.util.Scanner;

public class Q1 implements Runnable {

  private int num;

  public Q1(int num) {

    this.num = num;
  }

  public static void main(String[] args) {

    System.out.println("Welcome! This program print all prime numbers less  or equal than the input number");
    Scanner sc = new Scanner(System.in);
    System.out.print("Please enter an  integer greater than 2: ");
    int input = sc.nextInt();

    while( input <= 2) {
      Scanner sc_new = new Scanner(System.in);
      System.out.print("Entered value is invalid.\nPlease enter an even integer greater than 2: ");
      input = sc_new.nextInt();
    }


    new Thread(new Q1(input)).start(); // run the thread
  }


//Run function for the thread
public void run() {


  for(int i = 1; i <= num; i += 2){
    if(isPrime(i)){
      System.out.println(i); // print the prime numbers
    }
  }

}


//Prime function useful to see if the number is prime or not
public static boolean isPrime(int num) {

        if (num <= 1) { // see
            return false;
        }

        for (int i = 2; i <= Math.sqrt(num); i++) {
          if (num % i == 0) {
              return false;
        }
    }
           return true;
}


}
