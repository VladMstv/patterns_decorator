import { Car } from "./car";

export class Audi extends Car {
  getDescription() {
    return "Audi";
  }

  getPrice() {
    return 200000;
  }
}
