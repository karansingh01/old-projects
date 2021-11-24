package inheritance;

public abstract class AbstractAccount {
	protected double balance;
	
	public AbstractAccount() {
		this.balance = 0;
	}
	
	public void deposit(double amount) {
		if (amount <= 0) throw new IllegalArgumentException("Innskudd må være positivt");
		
		this.balance += amount;
	}
	
	public void withdraw(double amount) {
		if (amount <= 0) throw new IllegalArgumentException("Uttak må være positivt");
		this.internalWithdraw(amount);
	}
	
	public double getBalance() {
		return this.balance;
	}
	
	public abstract void internalWithdraw(double amount);	
}
