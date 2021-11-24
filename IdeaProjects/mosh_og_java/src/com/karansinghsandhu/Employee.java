package com.karansinghsandhu;

public class Employee {
    private int baseSalary;
    private int hourlyRate;


    public static int numberOfEmployees;{
    }

    public static void printNumberOfEmployees(){
        System.out.println(numberOfEmployees);
    }

    public Employee(int baseSalary){       // CONSTRUCTOR OVERLOADING
        this(baseSalary, 0);
    }

    public  Employee(int baseSalary, int hourlyRate){
        setBaseSalary(baseSalary);
        setHourlyRate(hourlyRate);
        numberOfEmployees++;
    }

    public int calculateWage(int extraHours){
        return baseSalary + (getHourlyRate() *extraHours);
    }
    public int calculateWage(){         // METHOD OVERLOADING
        return calculateWage(0);
    }

    private int getBaseSalary(){
        return baseSalary;
    }

    private void setBaseSalary(int baseSalary) {
        if(baseSalary<= 0)
            throw new IllegalArgumentException(" negative value");
        this.baseSalary = baseSalary;
    }


    private int getHourlyRate() {
        return hourlyRate;
    }

    private void setHourlyRate(int hourlyRate) {
        if(hourlyRate< 0)
            throw new IllegalArgumentException(" negative hourly rate");
        this.hourlyRate = hourlyRate;
    }
}
