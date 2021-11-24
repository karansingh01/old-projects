package inheritance;

public class SavingsAccount2 extends AbstractAccount {
	private int withdrawals;
	private double fee;
	
	public SavingsAccount2(int withdrawals, double fee) {
		this.withdrawals = withdrawals;
		this.fee = fee;
	}
	
	@Override
	public void internalWithdraw(double amount) {
		double total = amount;
		
		if (this.withdrawals <= 0) total += this.fee;
		if (this.balance - total > 0.0) this.balance -= total;
		else throw new IllegalStateException("Kan ikke ta ut mer penger enn du har på konto");	
		
		this.withdrawals--;
	}
	
}
