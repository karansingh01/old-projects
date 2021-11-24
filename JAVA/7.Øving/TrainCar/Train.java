package inheritance;

import java.util.ArrayList;

public class Train {
	private ArrayList<TrainCar> trainCars = new ArrayList<TrainCar>();

	public void addTrainCar(TrainCar trainCar) {
		this.trainCars.add(trainCar);
	}

	public boolean contains(TrainCar trainCar) {
		return this.trainCars.contains(trainCar);
	}
	
	public int getTotalWeight() {
		int total = 0;
		for (TrainCar trainCar: trainCars) {
			total += trainCar.getTotalWeight();
		}
		return total;
	}
	
	public int getPassengerCount() {
		int total = 0;
		
		for (TrainCar trainCar: this.trainCars) {
			if (trainCar instanceof PassengerCar) {
				total += ((PassengerCar) trainCar).getPassengerCount();
			}
		}
		return total;
	}
	
	public int getCargoWeight() {
		int total = 0;
		
		for (TrainCar trainCar: trainCars) {
			if (trainCar instanceof CargoCar) {
				total += ((CargoCar) trainCar).getCargoWeight();
			}
		}
		return total;
	}
	
	public String toString() {
		String total = "";
		
		for (TrainCar trainCar: this.trainCars) {
			if (trainCar instanceof PassengerCar) {
				total += new StringBuilder()
						.append("PassengerCar")
						.append(" | TotalWeight: ").append(trainCar.getTotalWeight())
						.append(" | Passengers: ").append(((PassengerCar) trainCar).getPassengerCount())
						.append("\n").toString();
			}
			else {
				total += new StringBuilder()
						.append("CargoCar")
						.append(" | TotalWeight: ").append(trainCar.getTotalWeight())
						.append(" | CargoWeight: ").append(((CargoCar) trainCar).getCargoWeight())
						.append("\n").toString();
			}
			
		}
		
		return total;
	}
	
}


