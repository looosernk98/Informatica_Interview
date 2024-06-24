import java.util.*;

class Main{
    public static void main(String[] args) {
       int n = 5;
       int fact = factorial(n);
       System.out.println(fact);
    }

    public static int factorial(int n){
        // time - O(n)
        if(n == 0) return 1;

        int prod = 1;
        for(int i = n; i>0; i--){
           prod = prod*i;
        }
        return prod;
    }
    public static int factorialRecursive(int n){
        // time - O(n)
        if(n == 0) return 1;
        
        int fact = factorialRecursive(n-1);
        return fact*n;
    }
}