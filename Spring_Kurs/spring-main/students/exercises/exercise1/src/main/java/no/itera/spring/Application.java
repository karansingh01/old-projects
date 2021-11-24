package no.itera.spring;

public class Application {

  public static void main(String[] args) {
    System.out.println("reeee");
    Calculation calculation = new Calculation(new Calculator() , new Display());

    calculation.complexCalculation();
  }

}
