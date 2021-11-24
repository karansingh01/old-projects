package stateandbehavior;

public class Account {

	private double balance;
	private double interestRate;

	public void setBalance(double balance) {
		this.balance = balance;
	}

	public void setinterestRate(double interestRate) {
		this.interestRate = interestRate;
	}

	public void addInterest() {
		this.balance += (balance * (interestRate / 100));

	}

	public double getInterestRate() {
		return interestRate;
	}

	public void deposit(double new_dep) {
		if (new_dep >= 0) {
			this.balance += new_dep;
		}
	}

	public double getBalance() {
		return balance;
	}

	public void setInterestRate(double value) {
		this.interestRate = value;
	}

	@Override
	public String toString() {
		return "balansen din er " + balance + " og har en interestRate på " + interestRate;
	}

	public static void main(String[] args) {
		var account = new Account();
		account.setBalance(100);
		account.setinterestRate(3);
		System.out.print(account);
	}

}
