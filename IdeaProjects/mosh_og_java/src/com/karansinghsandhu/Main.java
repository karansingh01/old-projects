package com.karansinghsandhu;






public class Main {
    public static void main(String[] args) {
        var emp1 = new Employee(10_000);
        var employee = new Employee(50_000, 20);
        Employee.printNumberOfEmployees();
        int wage = employee.calculateWage();
        System.out.println(wage);




        var textBox1 = new TextBox();
        textBox1.setText("Boks1");
        System.out.println(textBox1.text.toUpperCase());

        var textBox3 = textBox1;
        textBox3.setText("Hello World");
        System.out.println(textBox1.text);

        var textbook2 = new TextBox();
        textbook2.setText("bokS2");
        System.out.println(textbook2.text);





    }

}

