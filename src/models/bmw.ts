import { Car } from "./car";

export class BMWCar extends Car {
  getDescription() {
    return "BMW";
  }

  getPrice() {
    return 100000;
  }
}
