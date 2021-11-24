package stateandbehavior;

public class Location {

	private int x;
	private int y;

	public void setx(int x) {
		this.x = x;
	}

	public void sety(int y) {
		this.y = y;
	}

	public void up() {
		y -= 1;
	}

	public void down() {
		y += 1;
	}

	public void left() {
		x -= 1;
	}

	public void right() {
		x += 1;
	}

	public int getX() {
		return x;
	}

	public int getY() {
		return y;
	}

	@Override
	public String toString() {
		return "x posisjonen er: " + x + " og y er: " + y;
	}

	public static void main(String[] args) {
		var location = new Location();
		location.setx(10);
		location.sety(5);
		System.out.print(location);
	}

}
