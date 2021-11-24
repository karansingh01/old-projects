package inheritance;

public class CargoCar extends TrainCar {
	private int cargoWeight;
	
	public CargoCar(int deadWeight, int cargoWeight) {
		super(deadWeight);
		this.cargoWeight = cargoWeight;
	}
	
	public int getCargoWeight() {
		return this.cargoWeight;
	}
	
	public void setCargoWeight(int weight) {
		this.cargoWeight = weight;
	}
	
	public int getTotalWeight() {
		return this.getDeadWeight() + this.cargoWeight;
	}
}
