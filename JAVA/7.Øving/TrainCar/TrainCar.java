package inheritance;

public class TrainCar {
	private int deadWeight;
	
	
	public TrainCar(int deadWeight) {
		this.deadWeight = deadWeight;
	}
	
	public int getTotalWeight() {
		return this.deadWeight;
	}
	
	public void setDeadWeight(int weight) {
		this.deadWeight = weight;
	}
	
	public int getDeadWeight() {
		return this.deadWeight;
	}
}
