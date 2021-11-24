package no.itera.spring;

public class Calculation {

  private Calculator calculator;
  private Display display;

  public Calculation(Calculator calculator, Display display) {
    this.calculator = calculator;
    this.display = display;
  }

  public void complexCalculation() {
    Calculator calculator = new Calculator();

    int result = calculator.plus(2, 3);

    Display display = new Display();

    display.output(String.format("2 + 3 = %d", result));
  }

}
