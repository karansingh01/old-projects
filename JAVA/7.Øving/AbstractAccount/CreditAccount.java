package inheritance;

public class CreditAccount extends AbstractAccount {
	private double creditLine;

	public CreditAccount(double creditLine) {
		super();
		this.setCreditLine(creditLine);
	}
	
	public void setCreditLine(double newCreditLine) {
		if (newCreditLine < 0) throw new IllegalArgumentException("Kredittgrensen kan ikke være negativ");
		if (this.balance + newCreditLine < 0) throw new IllegalStateException("Kredittgrensen dekker ikke kontoen");
		this.creditLine = newCreditLine;
	}
	
	public double getCreditLine() {
		return this.creditLine;
	}

	@Override
	public void internalWithdraw(double amount) {
		if (this.balance + this.creditLine - amount >= 0.0) this.balance -= amount;
		else throw new IllegalStateException("Kan ikke ta ut mer penger enn du har på konto");
	}
	
}
