package inheritance;

public class DebitAccount extends AbstractAccount {
	
	public DebitAccount() {
		super();
	}

	@Override
	public void internalWithdraw(double amount) {
		if (this.balance - amount >= 0.0) this.balance -= amount;
		else throw new IllegalStateException("Kan ikke ta ut mer penger enn du har på konto");
	}
}
