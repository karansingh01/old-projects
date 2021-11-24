package inheritance;

public class PassengerCar extends TrainCar {
	private int passengers;
	
	public PassengerCar(int deadWeight, int passengers) {
		super(deadWeight);
		this.passengers = passengers;
	}
	
	public int getPassengerCount() {
		return this.passengers;
	}
	
	public void setPassengerCount(int passengers) {
		this.passengers = passengers;
	}
	
	public int getTotalWeight() {
		return this.getDeadWeight() + (this.passengers * 80);
	}
	
}
