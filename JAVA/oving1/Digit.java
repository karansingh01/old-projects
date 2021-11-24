package stateandbehavior;

public class Digit {

	private int tallsys;
	private int value;

	public Digit(int tallsys) {
		this.tallsys = tallsys;
		this.value = 0;
	}

	public int getValue() {
		return this.value;
	};

	/*
	 * private void checkValid(int value) { if (value < 0 && value > 10) { throw new
	 * IllegalArgumentException("number not valid, between 0 and 10"); } }
	 */

	public boolean increment() {
		value++;
		if (this.tallsys <= this.value) {
			value = 0;
			return true;
		} else {
			return false;
		}
	}

	public int getBase() {
		return this.tallsys;
	}

	@Override
	public String toString() {
		String str = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		return " " + str.charAt(tallsys);
	}

	public static void main(String[] args) {
		var digit = new Digit(13);

		System.out.println(digit);
	}
}
